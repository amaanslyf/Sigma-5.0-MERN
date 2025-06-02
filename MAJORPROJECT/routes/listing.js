const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const Listing = require('../models/listing');
const { isLoggedIn, isOwner, validateListing } = require('../middleware.js');
const listingController = require('../controllers/listing.js');
const multer = require('multer'); // For file uploads which parses multipart/form-data
const {storage} = require('../cloudConfig.js'); // Import Cloudinary storage configuration
const upload = multer({ storage }); // Directory where uploaded files will be stored


router
    .route("/")
    .get(wrapAsync(listingController.index))  //index route
    .post(isLoggedIn, validateListing, upload.single('listing[image]'), wrapAsync(listingController.createListing)); //create route
    
    //new route
router.get('/new', isLoggedIn, listingController.renderNewForm);

router
    .route("/:id")
    .get(wrapAsync(listingController.showListing)) //show route
    .put(isLoggedIn, isOwner, validateListing, upload.single('listing[image]'), wrapAsync(listingController.updateListing)) //update route
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing)); //delete route



//edit route
router.get('/:id/edit', isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

module.exports = router;