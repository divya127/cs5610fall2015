module.exports = function(app, db, mongoose) {

var model = require("./models/univs.model.js") (mongoose, db);
    require("./services/univ.service.server.js")(app, model);

};