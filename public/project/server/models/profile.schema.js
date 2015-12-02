module.exports = function(mongoose) {

    var ProfileSchema = mongoose.Schema({
            "firstName": String,
            "lastName" : String,
            "fields" : [FieldSchema]
        }, {collection: "cs5610.project.profile"});

        return ProfileSchema;
};