//load models
const User = require("../models/user");

const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.getuserSignin = (req, res, next) =>{
  res.render('signin');
}

exports.postuserSignup = async(req, res, next) =>{

           const isUserExist = await User.findOne({email: req.body.email});
           if(isUserExist){
               console.log("User with this credintial already exists.");
               return res.redirect("back");
           };
         bcrypt.hash(req.body.password, saltRounds, async(error, hash) =>{
           const user = new User({
                 name: req.body.name,
                 email: req.body.email,
                 //password: md5(req.body.pass),
                 password: hash
           });
           user.save(function(error){
             if(error) {
                 console.log(error);
             } else{
                 res.redirect("/home");
             };
         });
       });
     };

exports.postuserSignin = async(req, res, next) =>{

    const user = await User.findOne({email: req.body.email});

      if(!user){
          console.log("Error: No user found with this credentials!");
          return res.redirect("back");
      }
      //... fetch user from a db etc
      const domatch = await bcrypt.compare(req.body.password, user.password);
      if(!domatch) {
        console.log("Error: username or password is not valid");
        return res.redirect("back");
      } else {
        res.redirect("/home");
      };
}


exports.getuserLogout = async(req, res, next) => {
    await req.session.destroy();
    res.redirect('register');
};
