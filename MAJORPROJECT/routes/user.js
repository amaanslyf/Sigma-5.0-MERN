const express = require('express');
const router = express.Router();
const user = require('../models/user.js');
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware.js');
const userController = require('../controllers/user.js');

router
    .route("/signup")
    .get(userController.renderSignupForm)  //Get route for signup form
    .post(wrapAsync(userController.signup)); //Post route for signup form

router
    .route("/login")
    .get(userController.renderLoginForm) // Get route for login form
    .post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), userController.login);

//Get route for logout
router.get('/logout', userController.logout);

module.exports = router;