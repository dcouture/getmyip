var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('combined'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// required to use req.ip behind a reverse proxy
app.enable('trust proxy');


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
// NODE_ENV=production
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: 'Moooove On Nothing to See Here',
    error: {}
  });
});


module.exports = app;
