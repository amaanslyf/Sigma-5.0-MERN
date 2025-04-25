const express = require("express");
const app = express();
const port = 8080;

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded request bodies
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.get("/register", (req, res) => {
    res.send("Standard get response");
});
app.post("/register", (req, res) => {
    let {username, password} = req.body;
    res.send("Standard post response", {username });
    
    console.log(`Username: ${username}, Password: ${password}`);

});