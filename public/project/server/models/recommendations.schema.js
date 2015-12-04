module.exports = function(mongoose) {
    var RecommendationSchema = mongoose.Schema({
            "content": String,
            "authorId" : String,
            "authorName" : String,
            "receipientId": String
        });

        return RecommendationSchema;
};