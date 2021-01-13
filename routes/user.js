//importing dependecies
const express = require('express');
const router = express.Router();

const userControllers = require('../controlers/user');

router.get("/", userControllers.getLandingPage);
router.get("/register", userControllers.getRegisterPage);


//router.get("/home", userControllers.getHomePage)
router.get("/home/:userId", userControllers.getUserHomePage);
module.exports = router;
