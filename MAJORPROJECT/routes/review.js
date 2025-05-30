const express = require('express');
const router = express.Router({ mergeParams: true }); // mergeParams allows us to access params from parent route
const wrapAsync = require('../utils/wrapAsync.js');
const Review = require('../models/review.js');
const Listing = require('../models/listing.js');
const { validateReview , isLoggedIn , isReviewAuthor} = require('../middleware.js');
const reviewController = require('../controllers/review.js'); // Import the review controller

//Post route for reviews
router.post('/',isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

//Delete route for reviews
router.delete('/:reviewId', isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;