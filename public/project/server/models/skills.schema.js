module.exports = function(mongoose) {
      var SkillSchema = mongoose.Schema({
                "id" : Number,
              "title": String,
              "count" : Number
          });

          return SkillSchema;
  };