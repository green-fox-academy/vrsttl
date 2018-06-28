'use strict';

require('dotenv').config();

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('./public'));

app.use(express.json());

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

app.get('/', (req, res) => {
  console.log(req.headers);
  res.sendFile('./public' + '/index.html');
})

app.get('/hello', (req, res) => {
  console.log(req.headers);
  res.send({
    string: 'Hello World!'
  });
});

app.get('/posts', (req, res) => {
  console.log(req.headers);
  let sql = 'SELECT * from posts;';
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    } else {
      res.status(200).send;
      res.json({
        posts: rows
      });
    }
  });
});

app.post('/posts', (req, res) => {
  let sql = `INSERT INTO posts (title, url, timestamp, score, owner) VALUES ("${req.body.title}", "${req.body.url}", unix_timestamp(), "0", "${req.body.owner}");`;
  sql = `INSERT INTO users (username) VALUES ("${req.body.owner}");`
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    sql = `SELECT * FROM posts WHERE id = ${rows.insertId};`
    conn.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      }
      res.status(200).send;
      res.json({
        rows
      });
    });
  });
});

app.put(`/posts/:id/upvote`, (req, res) => {
  let vote = req.body.vote;
  let id = req.params.id;
  let sql = '';
  if (vote === 1) {
    sql = `UPDATE posts SET score = score + 1, vote ="${vote}" WHERE id = ${id};`;
  }
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    sql = `SELECT * FROM posts WHERE id = ${id};`
    conn.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      }
      res.status(200).send;
      res.json({
        rows
      });
    });
  });
});

app.put(`/posts/:id/downvote`, (req, res) => {
  let vote = req.body.vote;
  let id = req.params.id;
  let sql = '';
  if (vote === -1) {
    sql = `UPDATE posts SET score = score - 1, vote ="${vote}" WHERE id = ${id};`;
  }
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    sql = `SELECT * FROM posts WHERE id = ${id};`
    conn.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      }
      res.status(200).send;
      res.json({
        rows
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}.`);
});