import express from 'express';
import path from 'path';
import 'dotenv/config';

import routes from './routes';

var app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/movies', routes.movies);

app.get('/api/data/', (req, res) => {
  res.send('{"result":"true"}');
});

app.get('/', (req, res) => {
  res.send(express.static(path.join(__dirname, '../client/build/index.html')));
});

module.exports = app;
