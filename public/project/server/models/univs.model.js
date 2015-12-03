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
            userModel.findById(userId, function(err, user){
                            deferred.resolve(user);
                        });
            return deferred.promise;
        }

        function findUnivByName(name) {
            var deferred = q.defer();
            userModel.findOne({"instnm" : {$regex : name}}, function(err, univs){
                            deferred.resolve(univs);
                        });
            return deferred.promise;
        }

        function findAllUnivs() {
            var deferred = q.defer();
            userModel.find(function(err, users){
                deferred.resolve(users);
            });
            return deferred.promise;
        }

        function deleteUniv(userId) {
            var deferred = q.defer();
            userModel.remove({_id: userId}, function(err, user){
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
            userModel.create(newUser, function(err, doc){
                 deferred.resolve(doc);
            });
            return deferred.promise;
        }

        function updateUniv(userId, userObj) {
            var deferred = q.defer();
            userModel.update({_id: userId}, {$set: userObj}, function(err, user) {
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

