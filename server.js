var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var ipaddress 	= process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port 		= process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.use(express.static(__dirname + '/public'));//host the static content in public directory
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//app.use(multer());//for parsing multipart/form-data

require("./public/assignment/server/services/user.service.js")(app);
require("./public/assignment/server/services/form.service.js")(app);

app.listen(port,ipaddress);