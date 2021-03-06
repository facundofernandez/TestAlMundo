const express = require('express');
const cors = require('cors');
let bodyParser = require('body-parser');
const logger = require('morgan');

const hotelsRouter = require('./routes/hotels');

let app = express();

app.use(cors())

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/hotels', hotelsRouter);

app.use(function (err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json('error', { error: err });
});

module.exports = app;