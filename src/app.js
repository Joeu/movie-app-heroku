import express from 'express';
import path from 'path';
import 'dotenv/config';
import cors from 'cors';

import routes from './routes';

var app = express();

app.enable('etag');
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/movies', routes.movies);

app.get('/api/data/', (req, res) => {
  res.send('{"result":"true"}');
});

app.get('/', (req, res) => {
  res.send(express.static(path.join(__dirname, '../client/build/index.html')));
});

module.exports = app;
