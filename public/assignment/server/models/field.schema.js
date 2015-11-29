module.exports = function(mongoose) {
    var FieldSchema = mongoose.Schema({
            "label": String,
            "fieldType" : {
                  type: String,
                  enum: ["TEXT", "TEXTAREA", "RADIO", "CHECKBOX", "SELECT", "DATE"]
              },
              "options" :{
                 type: fieldType,
                 "TEXT": {
                     "placeholder" : {type: String, default: "Text"}
                 },
                 "TEXTAREA" : {
                     "placeholder" : {type: String, default: "Text"}
                 },
                 "RADIO" : {
                 "options" : [{
                     "label" : {type: String},
                     "value" : {type: String}
                     }]
                 },
                 "SELECT" : {
                  "options" : [{
                       "label" : {type: String},
                       "value" : {type: String}
                     }]
                 },
                 "CHECKBOX" : {
                  "options" : [{
                      "label" : {type: String},
                      "value" : {type: String}
                     }]
                 }
             }
        });

        return FieldSchema;
};