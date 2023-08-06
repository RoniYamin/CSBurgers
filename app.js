var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoryRouter = require('./routes/category');
var dishRouter = require('./routes/dish');
var mealsRouter = require('./routes/meals');
var orderRouter = require('./routes/order');
var userRouter = require('./routes/user');

var app = express();

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("db is connected");

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function() {
      console.log("Connected successfully");
    });
  }
  catch (error) {
    console.error("DB is not connected", error);
  }
}

connectMongoDB();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('Views'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/category', categoryRouter);
app.use('/api/dish', dishRouter);
app.use('/api/meal', mealsRouter);
app.use('/api/order', orderRouter);
app.use('/api/user', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;