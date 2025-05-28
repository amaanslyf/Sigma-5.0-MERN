const express = require('express');
const router = express.Router({ mergeParams: true }); // mergeParams allows us to access params from parent route
const wrapAsync = require('../utils/wrapAsync.js');
const Review = require('../models/review.js');
const Listing = require('../models/listing.js');
const { validateReview } = require('../middleware.js');


//Post route for reviews
router.post('/', validateReview, wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    // res.send("Review added successfully");
    // console.log("Review added successfully");
    req.flash('success', 'Review added successfully!');
    res.redirect(`/listings/${listing._id}`);

}));

//Delete route for reviews
router.delete('/:reviewId', wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', 'Review deleted successfully!');
    res.redirect(`/listings/${id}`);
}));






module.exports = router;