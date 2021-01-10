//load models
const User = require('../models/user');

exports.getLandingPage = (req, res, next) => {
    res.render('landing');
};

exports.getRegisterPage = (req, res, next) => {
    res.render('register');
};

exports.getHomePage = async(req,res, next) =>{
  try {
      // const userId = req.params.userId;
      // const user = await User.findById(userId);
      // console.log(user);
      // res.render("home", {home : user});
      res.render('home');
  } catch (error) {
    console.log(error);
  }
};
