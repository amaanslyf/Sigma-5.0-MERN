const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const ExpressError = require('../utils/ExpressError.js');
const { listingSchema } = require('../schema.js');
const Listing = require('../models/listing');
const { isLoggedIn } = require('../middleware.js');


//validatation for listing 
const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);

    if (error) {
        let errMsg = error.details.map(el => el.message).join(',');
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }

};



//index route
router.get('/', wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}));

//new route
router.get('/new',isLoggedIn, (req, res) => {
    res.render("listings/new.ejs");
});

//show route
router.get('/:id', wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate('reviews').populate('owner');
    if (!listing) {
        req.flash('error', 'Listing not found');
        return res.redirect('/listings');
    }
    res.render("listings/show.ejs", { listing });
}));

//create route
router.post('/', isLoggedIn, validateListing, wrapAsync(async (req, res, next) => {

    const { title, description, image, price, location, country } = req.body.listing;
    const newListing = new Listing({
        title,
        description,
        image,
        price,
        location,
        country
    });
    newListing.owner = req.user._id; // Set the owner to the currently logged-in user
    await newListing.save()
    req.flash('success', 'New listing created successfully!');
    res.redirect('/listings');

}));

//edit route
router.get('/:id/edit', isLoggedIn, wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash('error', 'Listing not found');
        return res.redirect('/listings');
    }
    res.render("listings/edit.ejs", { listing });
}));

//update route
router.put('/:id', isLoggedIn, validateListing, wrapAsync(async (req, res) => {

    let { id } = req.params;
    const { title, description, image, price, location, country } = req.body.listing;
    const listing = await Listing.findByIdAndUpdate(id, {
        title,
        description,
        image,
        price,
        location,
        country
    });
    req.flash('success', 'Listing updated successfully!');
    res.redirect(`/listings/${id}`);
}));

//delete route
router.delete('/:id', isLoggedIn, wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash('success', 'Listing deleted successfully!');
    res.redirect('/listings');
}));


module.exports = router;