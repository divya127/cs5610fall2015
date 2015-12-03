module.exports = function(mongoose) {
      var SkillSchema = mongoose.Schema({
              "title": String,
              "count" : Number
          });

          return SkillSchema;
  };