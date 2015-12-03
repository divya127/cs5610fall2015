var q = require("q");

module.exports = function(mongoose, db) {

    var UsersSchema = require("./user.schema.js")(mongoose);
    var usersModel = mongoose.model("usersModel", UsersSchema);

    var api = {


        };
        return api;


}