var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));//host the static content in public directory

//bodyparser for update and create
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer());//for parsing multipart/form-data

require("./public/assignment/server/app.js")(app);

var ipaddress 	= process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port 		= process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port,ipaddress);