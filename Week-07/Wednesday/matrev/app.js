'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/test', (req, res) => {
  res.json({
    message: 'ok',
  });
});

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}.`);
});