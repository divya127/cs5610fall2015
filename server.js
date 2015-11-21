var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var mongoose = require('mongoose');

var ipaddress 	= process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port 		= process.env.OPENSHIFT_NODEJS_PORT || 3000;
var mongoURL    ='mongodb://localhost/cs5610'; // process.env.OPENSHIFT_MONGODB_DB_URL || 

mongoose.connect(mongoURL);
var db = mongoose.connection;

app.use(express.static(__dirname + '/public'));//host the static content in public directory
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); //for parsing multipart/form-data

require("./public/assignment/server/app.js")(app, db, mongoose);

app.listen(port,ipaddress);