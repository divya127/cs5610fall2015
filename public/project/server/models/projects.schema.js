module.exports = function(mongoose) {
      var ProjectSchema = mongoose.Schema({
                "title" : String,
                "description" : String,
          });
          return ProjectSchema;
  };