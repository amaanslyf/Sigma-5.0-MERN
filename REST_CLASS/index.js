const express = require('express'); // Importing express module
const app = express(); // Creating an instance of express 
const path = require('path'); // Importing path module to handle file paths
const { v4: uuidv4 } = require('uuid'); // Importing uuid module to generate unique ids
const methodOverride = require('method-override'); // Importing method-override module to support HTTP verbs such as PUT or DELETE in places where the client doesn't support it

let port = 8080; // Setting the port to 8080

app.set('view engine', 'ejs'); // Setting the view engine to ejs
app.set('views', path.join(__dirname, 'views')); // Setting the views directory to the views folder in the current directory  

app.use(express.static(path.join(__dirname, 'public'))); // Serving static files from the public directory
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded data
app.use(express.json()); // Middleware to parse JSON data
app.use(methodOverride('_method')); // Middleware to support HTTP verbs such as PUT or DELETE in places where the client doesn't support it

app.listen(port, () => {  // Starting the server and listening on the specified port
    console.log(`Server is running on http://localhost:${port}`);
});


let posts = [
    {
        id: uuidv4(),
        username: "John Doe",
        content: "This is my first post"
    },
    {
        id: uuidv4(),
        username: "Alice",
        content: "This is my first post"
    },
    {
        id: uuidv4(),
        username: "Aman",
        content: "This is my first post"
    }
]
app.get('/posts', (req, res) => { // Handling GET request to the posts endpoint
    res.render("index.ejs", { posts: posts }); // Rendering the index.ejs file and passing the posts array to it
});



app.get('/posts/new', (req, res) => { // Handling GET request to the new post endpoint for creating a new post through submitting a form
    res.render("new.ejs"); // Rendering the new.ejs file
});


app.post('/posts', (req, res) => { // Handling POST request to the posts endpoint for creating a new post
    let { username, content } = req.body; // Destructuring the request body to get the username and content
    let id = uuidv4(); // Generating a new unique id for the post
    posts.push({ id, username, content }); // Pushing the new post to the posts array

    res.redirect("/posts"); // Redirecting to the posts endpoint to display the updated posts
});

app.get('/posts/:id', (req, res) => { // Handling GET request to the posts/:id endpoint
    let { id } = req.params; // Destructuring the request parameters to get the id
    let post = posts.find(post => post.id === id); // Finding the post with the specified id
    res.render("show.ejs", {post }); // Rendering the show.ejs file and passing the post object to it
});

app.patch('/posts/:id', (req, res) => { // Handling PATCH request to the posts/:id endpoint for updating a post
    let { id } = req.params; // Destructuring the request parameters to get the id
    let newContent = req.body.content; // Getting the new content from the request body
    let post = posts.find(post => post.id === id); // Finding the post with the specified id
    post.content = newContent; // Updating the content of the post
    res.redirect("/posts"); // Redirecting to the posts endpoint to display the updated posts
});
app.get('/posts/:id/edit', (req, res) => { // Handling GET request to the posts/:id/edit endpoint for editing a post
    let { id } = req.params; // Destructuring the request parameters to get the id
    let post = posts.find(post => post.id === id); // Finding the post with the specified id
    res.render("edit.ejs", { post: post }); // Rendering the edit.ejs file and passing the post object to it
});

app.delete('/posts/:id', (req, res) => { // Handling DELETE request to the posts/:id endpoint for deleting a post
    let { id } = req.params; // Destructuring the request parameters to get the id
    posts = posts.filter(post => post.id !== id); // Filtering out the post with the specified id from the posts array
    res.redirect("/posts"); // Redirecting to the posts endpoint to display the updated posts
});
