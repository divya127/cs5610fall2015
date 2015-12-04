module.exports = function(mongoose) {

    var SkillSchema = require("./skills.schema.js")(mongoose);
    var RecommendationSchema = require("./recommendations.schema.js")(mongoose);

    var ProfileSchema = mongoose.Schema({
            "userId": String,
            "schoolName": String,
            "tagLine": String,
            "skills" : [SkillSchema],
            "testScores": [{
                "test": String,
                "scoreAcheived": Number,
                "scoreMax": Number,
                "org": String
            }],
            "recommendations" : [RecommendationSchema],
            "projects" : [{
                "title" : String,
                "description" : String,
            }],
            "clubs" : [{
                "clubName" : String
            }],
            "publications":[{
                "title" : String,
                "members": String,
                "description": String,
            }],
            "image" : String
        }, {collection: "cs5610.project.profile"});

        return ProfileSchema;
};