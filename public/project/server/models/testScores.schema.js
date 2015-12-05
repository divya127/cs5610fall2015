module.exports = function(mongoose) {
      var TestScoreSchema = mongoose.Schema({
                "test": String,
                "scoreAcheived": Number,
                "scoreMax": Number,
                "org": String
          });
          return TestScoreSchema;
  };