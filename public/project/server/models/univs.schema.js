module.exports = function(mongoose) {

    var UnivSchema = mongoose.Schema({
            "instnm": String,
            "addr" : String,
            "city": String,
            "webaddr" : String,
            "adminurl": String,
            "faidurl" : String,
            "applurl": String,
            "npriurl" : String,
        }, {collection: "cs5610.project.univ"});
        return UnivSchema;
};