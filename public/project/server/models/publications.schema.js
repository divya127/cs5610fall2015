module.exports = function(mongoose) {
      var PublicationSchema = mongoose.Schema({
              "title" : String,
              "members": String,
              "description": String,
          });
          return PublicationSchema;
  };