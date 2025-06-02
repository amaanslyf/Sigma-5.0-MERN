const Listing = require("../models/listing");
module.exports.index=async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
}

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({ path: 'reviews', populate: { path: 'author' } }).populate('owner');
    if (!listing) {
        req.flash('error', 'Listing not found');
        return res.redirect('/listings');
    }
    res.render("listings/show.ejs", { listing });
}

module.exports.createListing = async (req, res, next) => {

    const { title, description, image, price, location, country } = req.body.listing;
    let url=req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing({
        title,
        description,
        image,
        price,
        location,
        country
    });
    newListing.owner = req.user._id; // Set the owner to the currently logged-in user
    newListing.image = { url, filename }; // Set the image field with the uploaded file's path and filename
    await newListing.save()
    req.flash('success', 'New listing created successfully!');
    res.redirect('/listings');

}

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash('error', 'Listing not found');
        return res.redirect('/listings');
    }
    res.render("listings/edit.ejs", { listing });
}

module.exports.updateListing = async (req, res) => {

    let { id } = req.params;


    const { title, description, image, price, location, country } = req.body.listing;
    let listing=await Listing.findByIdAndUpdate(id, {
        title,
        description,
        image,
        price,
        location,
        country
    });
    if(typeof req.file!=='undefined'){
    let url=req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename }; // Update the image field with the new uploaded file's path and filename
    await listing.save();
    }
    req.flash('success', 'Listing updated successfully!');
    res.redirect(`/listings/${id}`);
}

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash('success', 'Listing deleted successfully!');
    res.redirect('/listings');
}