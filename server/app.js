const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
let bodyParser = require('body-parser');
const logger = require('morgan');

const indexRouter = require('./routes');
let app = express();

app.use(cors())

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/hoteles',indexRouter);

app.use(function (req, res, next) {
    next(createError(404));
});


module.exports = app;