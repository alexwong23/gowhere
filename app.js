// every request has to go through this file
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// node routes
var appRoutes = require('./routes/app');
var actRoutes = require('./routes/acts');
var userRoutes = require('./routes/user');

// mongoose connect to mongodb
var app = express();

// switch between test and prod
// mongoose.connect('localhost:27017/node-angular');
mongoose.connect('wdi6-alex:123456@ds127878.mlab.com:27878/gowhere');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// 'static' allows public folder to be accessible
// public folder serves the application
app.use(express.static(path.join(__dirname, 'public')));

// prevent cross origin request errors
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

// using node routes
app.use('/act', actRoutes);
app.use('/user', userRoutes);
app.use('/', appRoutes);

// any unknown routes are directed back to index html, catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});


module.exports = app;
