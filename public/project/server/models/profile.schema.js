module.exports = function(mongoose) {

    var SkillSchema = require("./skills.schema.js")(mongoose);
    var ProjectSchema = require("./projects.schema.js")(mongoose);
    var TestScoreSchema = require("./testScores.schema.js")(mongoose);
    var ClubSchema = require("./clubs.schema.js")(mongoose);
    var PublicationSchema = require("./publications.schema.js")(mongoose);
    var RecommendationSchema = require("./recommendations.schema.js")(mongoose);

    var ProfileSchema = mongoose.Schema({
            "userId": String,
            "schoolName": String,
            "tagLine": String,
            "skills" : [SkillSchema],
            "testScores": [ TestScoreSchema ],
            "recommendations" : [ RecommendationSchema ],
            "projects" : [ ProjectSchema ],
            "clubs" : [ ClubSchema ],
            "publications":[PublicationSchema],
            "univsApplied" : [{
                "univName" : String
            }],
            "image" : String
        }, {collection: "cs5610.project.profile"});

        return ProfileSchema;
};