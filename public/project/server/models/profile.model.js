var q = require("q");

module.exports = function(mongoose, db) {

    var ProfileSchema = require("./profile.schema.js")(mongoose);
    var profileModel = mongoose.model("profileModel", ProfileSchema);

    var api = {

        };
        return api;
}