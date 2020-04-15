/* eslint-disable no-console */
const express = require('express');
const moongoose = require('moongoose');
const bodyParser = require('body-parser');
const url = require('url');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dataRoutes = require('./v1/routes/dataRoutes');
// const logRoutes = require('./v1/routes/logRoutes');

moongoose.connect('mongodb+srv://Odinaka-Joy:f2V8TTdjWDAI3dgU@cluster0-65bot.mongodb.net/test?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, Content, Accept, Content-Type, Authorization, Content-Length, X-Requested-With');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  res.status(200).json({ message: 'YAY! Congratulations! Your Are Connected To Covid19 Estimator Api!!!' });
});

/* * Application Routes For All Resources * */
app.use('/api/v1/on-covid-19', dataRoutes);
// app.use('/api/v1/on-covid-19/log', logRoutes);

/* * Checks for use of wrong version in url and flags error * */
app.use('/api', (req, res, next) => {
  const reqPath = url.parse(req.url, true);
  const version = reqPath.pathname.split('/');
  if (version[1] !== 'v1') {
    res.status(505).json({ message: `Sorry, Version ${version[1]} is not available` });
  } else {
    next();
  }
  res.end();
});

// when a random route is inputed
app.use('*', (req, res) => {
  res.status(200).json({ message: 'Welcome To Covid19 Estimator Api. Please Ensure You Entered A Correct Url!!!' });
});

module.exports = app;
