'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = (0, _express2.default)();

// app.use(express.static(path.join(__dirname, '../client/build')));

// app.get('/api/data/', (req, res) => {
//   res.send('{"result":"true"}');
// });

app.get('*', function (req, res) {
  res.send('Hello, world!');
  // res.send(express.static(path.join(__dirname, '../client/build')));
});

module.exports = app;
//# sourceMappingURL=app.js.map