const Listing = require('./models/listing');
const Review= require('./models/review');
const ExpressError = require('./utils/ExpressError.js');
const { listingSchema , reviewSchema} = require('./schema.js');



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

// Middleware to check if the user is an owner
module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing.owner._id.equals(res.locals.currUser._id)) {
         req.flash('error', 'You do not have permission to edit this listing');
        return res.redirect(`/listings/${id}`);
    }
    next();
}

// Middleware to check if the user is an author of the review
module.exports.isReviewAuthor = async (req, res, next) => {
    let { id , reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if (!review.author.equals(res.locals.currUser._id)) {
         req.flash('error', 'ACTION DENIED! You arent the author of this review');
        return res.redirect(`/listings/${id}`);
    }
    next();
}

// Middleware to validate the listing data
module.exports.validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);

    if (error) {
        let errMsg = error.details.map(el => el.message).join(',');
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }

};

//function to validate reviews
module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);

    if (error) {
        let errMsg = error.details.map(el => el.message).join(',');
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }

};
