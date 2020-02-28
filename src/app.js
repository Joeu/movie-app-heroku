import express from 'express';
import path from 'path';

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// app.use(express.static(path.join(__dirname, '../client/build')));

// app.get('/api/data/', (req, res) => {
//   res.send('{"result":"true"}');
// });

app.get('*', (req, res) => {
  res.send('Hello, world!');
  // res.send(express.static(path.join(__dirname, '../client/build')));
});

module.exports = app;
