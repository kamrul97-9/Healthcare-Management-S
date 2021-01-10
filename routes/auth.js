const express = require('express');
const router = express.Router();

//importing auth controllers
const authControllers = require('../controlers/auth');

router.get('/signin', authControllers.getuserSignin);
router.post('/signin', authControllers.postuserSignin);

router.post('/signup', authControllers.postuserSignup);

router.get('/logout', authControllers.getuserLogout);

module.exports = router;
