'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');

app.use('/static', express.static(__dirname + '/static'));
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/views', express.static(__dirname + '/views'));
app.use(express.json());
app.set('view engine', 'ejs');

const conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'quiz'
});

app.get('/game', (req, res) => {
  let random = Math.floor(Math.random() * 10) + 1;
  let sql = `SELECT * FROM questions LEFT JOIN answers ON questions.id = answers.question_id WHERE answers.question_id = ${random};`;
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    } else {
      let sortedAnswers = [];
      function setUpTheData() {
        rows.forEach(row => {
          let answerObject = {
            question_id: row.question_id,
            id: row.id,
            answer: row.answer,
            is_correct: row.is_correct
          }
          sortedAnswers.push(answerObject);
        });
      }
      setUpTheData();
      let forwardedObject = {
        id: rows[0].question_id,
        question: rows[0].question,
        answers: sortedAnswers
      }
      res.render('home', {
        forwardedObject
      });
      console.log(forwardedObject);
    }
  });
});

app.get('/questions', (req, res) => {
  let sql = `SELECT * FROM questions;`;
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    } else {
     
      res.render('questions', {
        rows
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
