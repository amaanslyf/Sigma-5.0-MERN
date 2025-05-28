module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl; // Store the original URL where we wanted to go before our login page interrupted us aand asked us to login first and so that we can redirect the user to that page after they login
        req.flash('error', 'You must be logged in to create a listing');
        return res.redirect('/login');
    }
    next();
}

//middleware to save the redirect URL in res.locals because we need to access it again after the user logs in as session is destroyed
module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}