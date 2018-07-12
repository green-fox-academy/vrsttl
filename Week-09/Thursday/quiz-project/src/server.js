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
  let rowRandom = 0;
  let sql = 'SELECT id FROM questions ORDER BY RAND() LIMIT 1;';
  conn.query(sql, (err, rowRand) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    rowRandom = rowRand[0].id;

    sql = `SELECT * FROM questions LEFT JOIN answers ON questions.id = answers.question_id WHERE answers.question_id = ${rowRandom};`;
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
});

app.get('/questions', (req, res) => {
  let sql = `SELECT * FROM questions;`;
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    } else {
      console.log(rows);
      res.render('questions', {
        rows
      });
    }
  });
});

app.get('/api/questions', (req, res) => {
  let sql = `SELECT * FROM questions;`;
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    } else {
      console.log(rows);
      res.json(
        rows
      );
    }
  });
});

app.post('/questions', (req, res) => {
  let question = req.body.question;
  let answer1 = req.body.answer1;
  let answer2 = req.body.answer2;
  let answer3 = req.body.answer3;
  let answer4 = req.body.answer4;
  let isCorrect1 = req.body.is_correct1;
  let isCorrect2 = req.body.is_correct2;
  let isCorrect3 = req.body.is_correct3;
  let isCorrect4 = req.body.is_correct4;

  let sql = `INSERT INTO questions (question) VALUES ("${question}");`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    console.log(rows);

    sql = `INSERT INTO answers (answer, question_id, is_correct) VALUES ("${answer1}", ${rows.insertId}, ${isCorrect1}), ("${answer2}", ${rows.insertId}, ${isCorrect2}), ("${answer3}", ${rows.insertId}, ${isCorrect3}), ("${answer4}", ${rows.insertId}, ${isCorrect4});`;
    conn.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      } res.json({
        status: "ok",
        id: rows.insertId
      });
    });
  });
});

app.delete(`/questions/:id`, (req, res) => {
  const id = req.params.id;
  let sql = `DELETE FROM answers WHERE question_id = ${id};`
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    sql = `DELETE FROM questions WHERE id = ${id};`;
    conn.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      }
      res.json({
        rows
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
