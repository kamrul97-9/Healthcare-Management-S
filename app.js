//jshint esversion: 6
const express = require("express");
const ejs = require("ejs");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const app = express();


app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({
    extended:true
}));

app.use(session({
    secret: "Hipp hiip hopp hopp.",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
}));

//connect to a new database called MediTeam
mongoose.connect("mongodb://localhost:27017/MediTeam",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

//database configuration
let db = mongoose.connection;
db.once("open", () => {
  console.log("Database is connected to MongoDB");
});
db.on("error", (err) => {
  console.log(err);
});

//load models
const User = require("./models/user");

// importing controllers
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

app.use(userRoutes);
app.use(authRoutes);


const port = 3055;
app.listen(port, ()=>{
    console.log(`Surver is running on https://localhost:${port}`);

})
