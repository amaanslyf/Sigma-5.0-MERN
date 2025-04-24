const express = require('express');
const app = express();
const path = require('path');  //package for handling file paths

const port = 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Set the views directory so that EJS can find the templates from its parent directory too

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/Rolldice', (req, res) => {
    let diceval= Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
    res.render('Rolldice.ejs',{diceval}); // Pass the random number to the EJS template
});
app.listen(port, () => {
    console.log(`Server is  running on port ${port}`);
});