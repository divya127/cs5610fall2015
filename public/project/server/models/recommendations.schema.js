module.exports = function(mongoose) {
    var RecommendationSchema = mongoose.Schema({
            "content": String,
            "writerId" : String,
            "receipientId": String
        });

        return RecommendationSchema;
};