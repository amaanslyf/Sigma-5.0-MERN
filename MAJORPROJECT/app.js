const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const wrapAsync = require('./utils/wrapAsync.js');
const ExpressError = require('./utils/ExpressError.js');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejsMate);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, '/public')));

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);

}

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});

app.get('/', (req, res) => {
    res.send("Hello i m root");
});


//index route
app.get('/listings', wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}));

//new route
app.get('/listings/new', (req, res) => {
    res.render("listings/new.ejs");
});

//show route
app.get('/listings/:id', wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
}));

//create route
app.post('/listings', wrapAsync(async (req, res, next) => {
    if (!req.body.listing) {
        throw new ExpressError(400,"Invalid Listing Data");
    }

    const { title, description, image, price, location, country } = req.body;
    const newListing = new Listing({
        title,
        description,
        image,
        price,
        location,
        country
    });
    await newListing.save()
    res.redirect('/listings');

}));

//edit route
app.get('/listings/:id/edit', wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
}));

//update route
app.put('/listings/:id', wrapAsync(async (req, res) => {
     if (!req.body.listing) {
        throw new ExpressError(400,"Invalid Listing Data");
    }
    let { id } = req.params;
    const { title, description, image, price, location, country } = req.body;
    const listing = await Listing.findByIdAndUpdate(id, {
        title,
        description,
        image,
        price,
        location,
        country
    });
    res.redirect(`/listings/${id}`);
}));

//delete route
app.delete('/listings/:id', wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect('/listings');
}));


// //for all routes that are not defined
// app.all('*', (req, res, next) => {
//     next( new ExpressError(404,"Page not found"));
// });

//error handling middleware
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).send(message);
});