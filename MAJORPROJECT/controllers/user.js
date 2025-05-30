const user = require('../models/user.js');
module.exports.renderSignupForm = (req, res) => {
    res.render('users/signup.ejs');
}

module.exports.signup = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new user({
            email,
            username
        });
        const registeredUser = await user.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
        req.flash('success', 'Successfully signed up!');
        res.redirect('/listings');
        });
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/signup');
    }
}

module.exports.renderLoginForm = (req, res) => {
    res.render('users/login.ejs');
}

module.exports.login=(req, res) => {
    req.flash('success', `Welcome back!${req.user.username}`);
    res.redirect(res.locals.redirectUrl || '/listings'); // Redirect to the saved URL or default to listings
}

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Logged out successfully!');
        res.redirect('/listings');
    });
}