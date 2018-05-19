var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var usersRouter = require('./routes/api');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res) {
  res.status(500).send("Something went wrong :(");
});

app.listen(3000,()=>console.log('Listening on port 3000....'));

// module.exports = app;
