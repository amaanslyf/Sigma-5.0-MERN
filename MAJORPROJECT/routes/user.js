const express = require('express');
const router = express.Router();
const user = require('../models/user.js');
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware.js');
const userController = require('../controllers/user.js');


//Get route for signup form
router.get('/signup', userController.renderSignupForm);

//Post route for signup form
router.post('/signup', wrapAsync(userController.signup));

//Get route for login form
router.get('/login', userController.renderLoginForm);

//Post route for login form
router.post('/login',saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), userController.login);

//Get route for logout
router.get('/logout', userController.logout);

module.exports = router;