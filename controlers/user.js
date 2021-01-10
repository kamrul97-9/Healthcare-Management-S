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
      const user = await User.find({ userId: req.params.userId });
      console.log(user);
  } catch (error) {
    console.log(error);
  }
};
