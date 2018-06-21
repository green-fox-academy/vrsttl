'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let name = 'Guest';  //default case
  if (req.query.name !== undefined) {   // ?name= input
    name = req.query.name;
  }
  res.render('home', {
    title: 'Welcome!',    //passing content into home.ejs
    text: name,
    showText: true,
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});