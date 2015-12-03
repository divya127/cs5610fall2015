module.exports = function(mongoose) {
    var UserSchema = mongoose.Schema({
            "firstName": String,
            "lastName" : String,
            "username" : String,
            "password" : String,
            "email"    : String,
            "accountType": {
                     type: String,
                     enum: ["student", "professor"]
                 },
        }, {collection: "cs5610.project.user"});

        return UserSchema;
};