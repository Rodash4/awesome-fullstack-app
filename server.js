const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use(express.static('public'));

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Ashcory87!',
        data: 'books_db',
    },
    console.log('Connected to the db.')
);

db.query('select * from favorite_books', (err, results) => {
    console.log(results)
    res.json(results);
});
    

app.get('/books', (req, res) => {
    db.query('select * from favorite_books', (err, results) => {
        console.log(results)
        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log("server running on port: ${PORT}");
});