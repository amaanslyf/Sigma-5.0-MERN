const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static("/public"));



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'root'
});

let getRandomuser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.password(),
        faker.internet.email(),
    ];
}



app.listen(8080, () => {
    console.log("Server is running on port 8080");
});

app.get('/', (req, res) => {
    let q = "SELECT COUNT(*) FROM user";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]['COUNT(*)'];
            res.render('home.ejs', { count });

        });
    } catch (err) {
        console.log(err);
        res.send("Error: " + err);
    }
});


app.get('/user', (req, res) => {
    let q = "SELECT * FROM user";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            res.render('users.ejs', { result });
        });
    } catch (err) {
        res.send("Error: " + err);
    }
});
// edit route
app.get('/user/:id/edit', (req, res) => {
    let id = req.params.id;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render('edit.ejs', { user });
        });
    } catch (err) {
        res.send("Error: " + err);
    }
});

//update after edit route
app.patch('/user/:id', (req, res) => {

    let id = req.params.id;
    let { password: formpass, username: newUsername } = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (formpass != user.password) {
                res.send("Password is not correct");
            } else {
                let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;
                connection.query(q2, (err, result) => {
                    if (err) throw err;
                    res.redirect('/user');
                });
            }
        });
    } catch (err) {
        res.send("Error: " + err);
    }
});