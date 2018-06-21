'use strict';
//npm init -y
const express = require('express'); //npm i express --save
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {    //Client gets and requests, server responds and sends
  res.send('Hello hello World');
});

app.listen(PORT, () => {
  console.log(`I'm running on port ${PORT}`);
});
