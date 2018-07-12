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
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

app.get('/', (req, res) => {
  let forwardedBasicInfo = [];
  forecasts.forEach(element => {
    let currentCity = {
      city: element.city,
      location: element.location,
      temp: element.weather[0].temp,
      icon: element.weather[0].icon
    }
    forwardedBasicInfo.push(currentCity);
  });
  console.log(forwardedBasicInfo);

  res.render('home', {
    title: 'Weather forecast splash page',
    cities: forwardedBasicInfo,
    appurl: app.url
  });
});