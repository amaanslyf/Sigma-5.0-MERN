const express = require('express');
const app = express();
const path = require('path');  //package for handling file paths

const port = 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Set the views directory so that EJS can find the templates from its parent directory too

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.listen(port, () => {
    console.log(`Server is  running on port ${port}`);
});