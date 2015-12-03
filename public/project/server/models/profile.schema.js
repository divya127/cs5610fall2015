module.exports = function(mongoose) {

    var SkillSchema = require("./skills.schema.js")(mongoose);
    var RecommendationSchema = require("./recommendations.schema.js")(mongoose);

    var ProfileSchema = mongoose.Schema({
            "firstName": String,
            "lastName" : String,
            "schoolName": String,
            "tagLine": String,
            "skills" : [SkillSchema],
            "testScores": [
                "test": String,
                "scoreAcheived": Number,
                "scoreMax": Number,
                "host": String
            ],
            "recommendations" : [RecommendationSchema],
            "projects" : [
                "title" : String,
                "description" : String,
            ],
            "clubs" : [
                "clubName" : String
            ],
            "image" : String
        }, {collection: "cs5610.project.profile"});

        return ProfileSchema;
};