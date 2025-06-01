if(process.env.NODE_ENV !== "production") {// Check if the environment is not production
    require('dotenv').config(); // Load environment variables from .env file
    
}



const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError.js');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user.js');



//using express router for listing routes
const listingRouter = require('./routes/listing.js');
//using express router for review routes
const reviewRouter = require('./routes/review.js');
//using express router for user routes
const userRouter = require('./routes/user.js');



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

// Passport.js configuration for user authentication
// Initialize Passport.js
app.use(passport.initialize());
// Initialize Passport.js session management
app.use(passport.session());
// Configure Passport.js to use the LocalStrategy for authentication
passport.use(new LocalStrategy(User.authenticate()));
// Serialize and deserialize user instances to support persistent login sessions
passport.serializeUser(User.serializeUser()); //stores user id in session
passport.deserializeUser(User.deserializeUser()); //retrieves user from session using id for subsequent requests


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

// Middleware to set flash messages in res.locals for use in views
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currUser = req.user; // Set the current user in res.locals for use in views
    
    next();
});


//Using the listings router for all routes starting with /listings
app.use('/listings', listingRouter);
//Using the reviews router for all routes starting with /listings/:id/reviews
app.use('/listings/:id/reviews', reviewRouter);
//Using the user router for all routes starting with /users
app.use('/', userRouter);


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






// app.get("/demouser", async (req, res) => {
//     let fakeUser= new User({
//         email:"student@gmail.com",
//         username: "student"
//     });
//     // Register the user using passport-local-mongoose
//     // The register method will hash the password and save the user to the database
//     let registeredUser=await User.register(fakeUser,"helloworld" );
//     res.send(registeredUser);
// });
    
    
