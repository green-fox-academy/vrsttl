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
    });
  } else if (task === 'factor') {
    res.json({
      result: `${factorial(number)}`,
    });
  } else if (typeof number !== number) {
    res.json({
      error: "Please provide a number!"
    });
  }
});

app.post('/arrays', (req, res) => {
  let task = req.body.what;
  let numbers = req.body.numbers;

  if (task === 'sum') {
    let output = 0;
    numbers.forEach(element => {
      output += element;
    });
    res.json({
      result: `${output}`,
    });
  } else if (task === 'multiply') {
    let output = 0;
    output = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      output = output * numbers[i];
    }
    res.json({
      result: `${output}`,
    });
  } else if (task === 'double') {
    let output = [];
    numbers.forEach(element => {
      output.push(element * 2);
    });
    res.json({
      result: `${output}`,
    });
  } else {
    res.json({
      error: "Please provide what to do with the numbers!"
    });
  }
});

app.post('/sith', (req, res) => {
  let text = req.body.text;
  if (text !== null && text !== undefined && text !== '') {
    let textArray = text.split('. ');
    let jumbledWords1 = textArray[0].split(' ');
    let jumbledWords2 = textArray[1].split(' ');
    let output = [];

    for (let i = 0; i < jumbledWords1.length; i++) {
      if (i % 2 === 1 && jumbledWords1.length % 2 !== 0) {
        if (i === 1) {
          output.push(jumbledWords1[i]);
          output.push(jumbledWords1[0]);
        } else {
          output.push(jumbledWords1[i]);
          output.push(jumbledWords1[i - 1]);
        }
      } else if (i % 2 === 0 && i === jumbledWords1.length - 1) {
        output.push(jumbledWords1[i]);
      }
    }

    jumbledWords1 = output;
    output = [];

    for (let i = 0; i < jumbledWords2.length; i++) {
      if (i % 2 === 1) {
        if (i === 1) {
          output.push(jumbledWords2[i]);
          output.push(jumbledWords2[0]);
        } else {
          output.push(jumbledWords2[i]);
          output.push(jumbledWords2[i - 1]);
        }
      } else if (i % 2 === 0 && i === jumbledWords2.length - 1) {
        output.push(jumbledWords2[i]);
      }
    }
    jumbledWords2 = output;
    output = '';

    let bufferOutput = jumbledWords1.join(' ').toLowerCase() + '.';
    let firstLetter1 = bufferOutput.charAt(0);

    bufferOutput = bufferOutput.replace(bufferOutput.charAt(0), firstLetter1.toUpperCase());

    let mumboJumbo = ['Err.eeeerrr...errr', 'Harrmharmm', 'Hmmm-rrr-mhrmahrm'];
    let mumbo = mumboJumbo[Math.floor(Math.random() * (3)) + 0] + '. ';

    output = bufferOutput + ' ' + mumbo;

    bufferOutput = jumbledWords2.join(' ').toLowerCase();
    firstLetter1 = bufferOutput.charAt(0);
    bufferOutput = bufferOutput.replace(bufferOutput.charAt(0), firstLetter1.toUpperCase());
    mumbo = mumboJumbo[Math.floor(Math.random() * (3)) + 0] + '. ';
    output = output + bufferOutput + ' ' + mumbo;
    console.log(output);
    if (text !== null || typeof text !== string) {
      res.json({
        sith_text: `${output}`,
      });
    }
  }
  else {
    res.json({
      error: "Feed me some text you have to, padawan young you are. Hmmm."
    });
  };
})

app.post('/translate', (req, res) => {
  let text = req.body.text;
  let lang = req.body.lang;
  if (text !== null && text !== undefined && lang !== null && lang !== undefined && text !== '' && lang !== '') {
    let textArray = text.split('');
    let vowels = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ö', 'ő', 'ú', 'ü', 'ű'];
    vowels.forEach(element => {
      for (let i = 0; i < textArray.length; i++) {
        if (textArray[i] === element) {
          textArray[i] += `v${textArray[i]}`;
        }
      }
    });
    let teveOutput = textArray.join('');
    res.json({
      translated: `${teveOutput}`,
      lang: 'teve'
    });
  } else {
    res.json({
      error: "I can't translate that!"
    });
  }
});

app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
})
