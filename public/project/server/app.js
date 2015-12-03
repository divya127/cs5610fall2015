module.exports = function(app, db, mongoose) {

    var userModel = require("./models/user.model.js") (mongoose, db);
    require("./services/user.service.server.js")(app, userModel);

    var model = require("./models/univs.model.js") (mongoose, db);
    require("./services/univ.service.server.js")(app, model);

    var profileModel = require("./models/profile.model.js") (mongoose, db);
        require("./services/profile.service.server.js")(app, profileModel);
        require("./services/others.service.server.js")(app, profileModel);
};