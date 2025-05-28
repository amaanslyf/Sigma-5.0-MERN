const express = require('express');
const router = express.Router();
const user = require('../models/user.js');
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require('passport');


//Get route for signup form
router.get('/signup', (req, res) => {
    res.render('users/signup.ejs');
});

//Post route for signup form
router.post('/signup', wrapAsync(async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new user({
            email,
            username
        });
        const registeredUser = await user.register(newUser, password);
        console.log(registeredUser);
        req.flash('success', 'Successfully signed up!');
        res.redirect('/listings');
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/signup');
    }
}));

//Get route for login form
router.get('/login', (req, res) => {
    res.render('users/login.ejs');
});

//Post route for login form
router.post('/login', passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), (req, res) => {
    req.flash('success', 'Welcome back!');
    res.redirect('/listings');
});



module.exports = router;