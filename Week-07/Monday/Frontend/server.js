'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
app.use('/assets', express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', (req, res) => {
  if (req.query.input) {
    res.json({
      received: parseInt(req.query.input),
      result: req.query.input * 2
    });
  } else {
    res.json({
      error: "Please provide an input!"
    });
  }
});

app.get('/greeter', (req, res) => {
  if (req.query.name && req.query.title) {
    res.json({
      welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    });
  } else if (!req.query.name) {
    res.json({
      error: "Please provide a name!"
    });
  } else {
    res.json({
      error: "Please provide a title!"
    });
  }
});

app.get(`/appenda/:word`, (req, res) => {
  if (req.params.word) {
    res.json({
      appended: `${req.params.word}a`
    });
  } else {
    res.status(404)
      .send('Not found');
  }
});

function adder(n) {
  if (n <= 0) {
    return 0;
  } else {
    return (n + adder(n - 1))
  };
}

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  else {
    factorial(n - 1);
    return n * factorial(n - 1);
  }
}

app.post('/dountil/:what', (req, res) => {
  let task = req.params.what;
  const number = parseInt(req.body.until);
  let result;

  if (task === 'sum') {
    res.json({
      result: `${adder(number)}`,
    })
  } else if (task === 'factor') {
    res.json({
      result: `${factorial(number)}`,
    })
  } else if (typeof number !== number) {
    res.json({
      error: "Please provide a number!"
    })
  }
});
app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});