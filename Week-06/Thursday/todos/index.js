'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

const todos = [
  'get up',
  'survive',
  'go back to bed',
];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Todo List!',    //passing content into home.ejs
    text: 'Things to do today:',
    task1: todos[0],
    task2: todos[1],
    task3: todos[2],
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});