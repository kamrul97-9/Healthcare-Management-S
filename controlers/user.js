//load models
const User = require('../models/user');

exports.getLandingPage = (req, res, next) => {
    res.render('landing');
};

exports.getRegisterPage = (req, res, next) => {
    res.render('register');
};

exports.getUserHomePage = async(req, res, next) => {
  try {
    const userid = await User.find({ userId: req.params.userId });
    console.log(`From getUserHomePage --> ${userid}`);
    res.render('home',{userid});
  } catch (error) {
    console.log(error.message);
  }
};

exports.getHomePage = async(req,res, next) =>{
  try {
      const userId = req.params.userId;
      const user = await User.find(userId);
      // const user = await User.find({ userId: req.params.userId });
      //console.log(`From getHomePage --> ${user}`);
      //await user.save();
      res.render('home',{home: user});
  } catch (error) {
    console.log(error);
  }
};
