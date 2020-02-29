import express from 'express';
import path from 'path';
import 'dotenv/config';
import cors from 'cors';

var app = express();

app.enable('etag');
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api/data/', (req, res) => {
  res.send('{"result":"true"}');
});

app.get('*', (req, res) => {
  res.send(express.static(path.join(__dirname, '../client/build/index.html')));
});

module.exports = app;
