var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
// const mongo = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017";

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var contactRouter = require('./routes/contact');
var loginRouter = require('./routes/login');
var galleryRouter = require('./routes/gallery');
var registerRouter = require('./routes/register');

const { RSA_NO_PADDING } = require('constants');

// const mongoSanitize = require("express-mongo-sanitize");

var app = express();

// Random Greeting
var rg = require('random-greetings')
greeting = rg.greet();

// app.use(
//   require("express-session")({

//     secret: "dasdfdfgnghmkjgsfgdfggdfgdf",
//     resave: true,
//     saveUninitialized: true,

//   })

// );

var mongoose = require("mongoose");
var mongoDB = "mongodb://localhost:27017/contact";
// // const mongoDB = "mongodb+srv://jazlyn_student_user:7TBr3x7YaOptR62i@cluster1.o0b4p.mongodb.net?retryWrites=true&w=majority"

//Help from StackOverflow
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", function () {
  console.log("connected to database")
})

// For Passport.js
require("./my-passport").init(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contact', contactRouter);
app.use('/login', loginRouter);
app.use('/gallery', galleryRouter);
app.use('/register', registerRouter);

// to replace prohibited characters with _, use:
// app.use(
//   mongoSanitize({
//     replaceWith: "_",
//   })
// );


// Create routes to pug files
// app.get("/", (req, res) => {
//   res.render("index");
// })

// app.get("/gallery", (req, res) => {
//   res.render("gallery");
// })

// app.get("/login", (req, res) => {
//   res.render("login");
// })

// app.get("/error", (req, res) => {
//   res.render("error");
// })


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
