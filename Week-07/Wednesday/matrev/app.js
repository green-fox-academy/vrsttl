'use strict';
require('dotenv').config();

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})  

// app.get('/test', (req, res) => {
//   let sql = 'SELECT * from author;';
//   let queryInputs = [];
//   if (req.query.country) {
//     sql = 'SELECT * from author WHERE country=?;'
//     queryInputs = [req.query.country];
//   }
//   conn.query(sql, queryInputs, (err, rows) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send();
//       //res.sendStatus(500);
//       return;
//     } else {
//       res.json({
//         authors: rows,
//       });
//     }
//   });
// });

app.get('/books', (req, res) => {
  let sql = 'SELECT book_name from book_mast;';
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      //res.sendStatus(500);
      return;
    } else {
      res.json({
        books: rows,
      });
    }
  });
});

// app.get('/allbooks', (req, res) => {
//   let sql = 'SELECT book_name, cate_descrip, aut_name, pub_name, book_price from book_mast, category, author, publisher;';

//   conn.query(sql, (err, rows) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send();
//       //res.sendStatus(500);
//       return;
//     } else {
//       console.log(sql);
//       res.json({
//         books: rows,
//       });
//     }
//   });
// });

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}.`);
});