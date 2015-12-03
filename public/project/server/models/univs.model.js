var q = require("q");

module.exports = function(mongoose, db) {

    var UnivSchema = require("./univs.schema.js")(mongoose);
    var univModel = mongoose.model("univModel", UnivSchema);

    var api = {
            findUnivById : findUnivById,
            findUnivByName : findUnivByName,
            findAllUnivs: findAllUnivs,
            deleteUniv : deleteUniv,
            addNewUniv : addNewUniv,
            updateUniv: updateUniv
        };
        return api;

        function findUnivById(userId) {
        console.log("inside user.model.js findUserById!!!!!");
            var deferred = q.defer();
            univModel.findById(userId, function(err, user){
                            deferred.resolve(user);
                        });
            return deferred.promise;
        }

        function findUnivByName(name) {
        console.log("inside univ.model.js findUnivByName!!!!! input: " + name);
            var deferred = q.defer();
            univModel.find({instnm : name}, function(err, univs){
                            console.log("UNiv found: " + univs);
                            deferred.resolve(univs);
                        });
            return deferred.promise;
        }

        function findAllUnivs() {
            var deferred = q.defer();
            univModel.find(function(err, users){
                deferred.resolve(users);
            });
            return deferred.promise;
        }

        function deleteUniv(userId) {
            var deferred = q.defer();
            univModel.remove({_id: userId}, function(err, user){
                   if(err) {
                       deferred.reject(err);
                   } else {
                       deferred.resolve(user);
                   }
            });
            return deferred.promise;
        }

        function addNewUniv(newUser) {
            var deferred = q.defer();
            console.log(newUser);
            univModel.create(newUser, function(err, doc){
                 deferred.resolve(doc);
            });
            return deferred.promise;
        }

        function updateUniv(userId, userObj) {
            var deferred = q.defer();
            univModel.update({_id: userId}, {$set: userObj}, function(err, user) {
                     if(err) {
                         deferred.reject(err);
                     } else {
                         userModel.findById(userId, function(err,usr) {
                                console.log(usr);
                                deferred.resolve(usr);
                         });
                     }
                 });
            return deferred.promise;
        }

};

