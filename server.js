// server.js

// BASE SETUP
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var passport = require('passport');
var expressSession = require('express-session');

var routes = require('./routes/index');
var users = require('./routes/users');

var dbConfig = require('./db.js');
var mongoose = require('mongoose');
mongoose.connect(dbConfig.url);//'mongodb://localhost/test'); // connect to db

var app = express();


// models
var UserModel = require('./app/user/UserModel');
var ProfileModel = require('./app/profile/ProfileModel');

// controllers
var UserController = require('./app/user/UserController');


app.use(expressSession({secret: 'shutthefuckuppatrick'}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user._id);
});
 
passport.deserializeUser(function(id, done) {
  UserModel.findById(id, function(err, user) {
    done(err, user);
  });
});

// view engine setup... views? you have no power here
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var port = process.env.PORT || 8080;




// ROUTES
app.use('/api', routes);
app.use('/api/login', users);

// Create our Express router
var router = express.Router();
router.route('/api/login')
    .post(UserController.postUsers)
    .get(UserController.getUsers);


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
        res.json(err);
        /*res.render('error', {
            message: err.message,
            error: err
        });*/
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


app.listen(port);
console.log('Magic happens on port ' + port);
//module.exports = app;
