var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var fs = require('fs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
//var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var cookieParser = require('cookie-parser');
var session = require('express-session');
//
//var googleCredentials = require("./google.js");
//var UserModel = require("./public/project/server/models/user.model.js");

app.use(express.static(__dirname + '/public'));//host the static content in public directory
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); //for parsing multipart/form-data
app.use(session({ secret: 'this is the secret' }));
app.use(cookieParser())
app.use(passport.initialize());
app.use(passport.session());

var ipaddress 	= process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port 		= process.env.OPENSHIFT_NODEJS_PORT || 3000;
var mongoURL    = process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/cs5610';

var db = mongoose.connect(mongoURL);

//require("./public/assignment/server/app.js")(app, db, mongoose);
require("./public/project/server/app.js")(app, db, mongoose, passport, LocalStrategy);
app.listen(port, ipaddress);