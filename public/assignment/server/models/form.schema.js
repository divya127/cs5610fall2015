module.exports = function(mongoose) {

    var fieldSchema = mongoose.Schema({

    })
    var UserSchema = mongoose.Schema({
            "title": String,
            "userId" : Number,
            "fields" :
        }, {collection: "cs5610.assignment.user"});

        return UserSchema;
};