module.exports = function(mongoose) {
    var UserSchema = mongoose.Schema({
            "firstName": String,
            "lastName" : String,
            "username" : String,
            "password" : String,
            "email"    : String,
            "phone"    : String,
            "schoolName": String,
            "tagLine": String,
            "accountType": {
                     type: String,
                     enum: ["Student", "Professor"]
                 },
            "googleId" : String,
            "linkedinId" : String,
            "facebookId" : String,
            "githubId" : String,
            "photo" : String,
            "displayName" : String
        }, {collection: "cs5610.project.user"});

        return UserSchema;
};