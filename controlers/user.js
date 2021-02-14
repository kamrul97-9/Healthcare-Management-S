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
    let {userId} = req.params;
    console.log(userId);
    const user = await User.findById(userId);
    console.log(`From getUserHomePage --> ${user}`);
    res.render('home',{user:user});
    //return res.json(user);
  } catch (error) {
    console.log(error.message);
  }
};


exports.getHomePage = async(req,res, next) =>{
  try {
      const user = await User.find({ userId: req.params.userId });
      //console.log(`From getHomePage --> ${user}`);
      //await user.save();
      res.render('home',{home: user});
  } catch (error) {
    console.log(error);
  }
};


exports.getData = async(req, res, next) =>{
  try {
    const date = new Date();
    console.log(date);
    // let{temp, time} = req.query;
    // time = new Date;
  } catch (error) {
    console.log(error);
  }
}