var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var cors = require('cors');
var log4js = require('log4js');
var HttpResult = require('./lib/httpresult.js');
var log = require('./lib/log.js').logger;

var app = express();

//access control allow orign
app.use(cors());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//add apiSuccess to res
app.use(function (req, res, next) {
    res.apiSuccess = function (data) {
        var result = new HttpResult();
        result.data = data;
        res.send(result);
    };
    next();
});

var routeRegister = require('./routes/routeregister');
routeRegister(app);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
app.use(function errorHandler(err, req, res, next) {
    if (err) {
        log.error(err);
        var result = new HttpResult();
        result.code = err.code || 500;
        result.error = err;
        result.message = err.message;
        res.send(result);
    } else {
        next();
    }
});

module.exports = app;
