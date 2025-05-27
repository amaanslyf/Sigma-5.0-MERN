const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError.js');
const session = require('express-session');
const flash = require('connect-flash');



//using express router for listing routes
const listings = require('./routes/listing.js');
//using express router for review routes
const reviews = require('./routes/review.js');



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, '/public')));


//session configuration
// Using express-session for session management
const sessionOptions = {
    secret:"mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 1000 * 60 * 60 * 24, // 1 day
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        httpOnly: true, // Helps prevent XSS attacks
    },
};
// Initialize session middleware
app.use(session(sessionOptions));
// Using connect-flash for flash messages
app.use(flash());

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

app.get('/', (req, res) => {
    res.send("Hello i m root");
});


app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    
    next();
});

//Using the listings router for all routes starting with /listings
app.use('/listings', listings);
//Using the reviews router for all routes starting with /listings/:id/reviews
app.use('/listings/:id/reviews', reviews);


// // For all routes that are not defined
// app.all("*", (req, res, next) => {
//     next(new ExpressError(404, "Page not found"));
// });

//Error handling middleware
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).render("error.ejs", { message });
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});