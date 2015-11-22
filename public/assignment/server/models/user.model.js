//var users = require('../models/user.mock.json');
var q = require("q");

module.exports = function(mongoose, db) {

    var UserSchema = require("./user.schema.js")(mongoose);
    var userModel = mongoose.model("userModel", UserSchema);

    var api = {
            findUserById : findUserById,
            findUserByUsername : findUserByUsername,
            findUserByCredentials : findUserByCredentials,
            findAllUsers: findAllUsers,
            deleteUser : deleteUser,
            addNewUser : addNewUser,
            updateUser: updateUser
        };
        return api;

        function findUserById(userId) {
        console.log("inside user.model.js findUserById!!!!!");
            var deferred = q.defer();
            userModel.findById(userId, function(err, user){
                            deferred.resolve(user);
                        });
            return deferred.promise;
        }

        function findUserByCredentials(credentials) {
        console.log("inside user.model.js findUserByCredentials");
            var deferred = q.defer();
            console.log(credentials.username + " " + credentials.password);
             userModel.find({username: credentials.username,
                            password: credentials.password}, function(err, user){
                            console.log(user);
                deferred.resolve(user);
            });
            return deferred.promise;
        }

        function findUserByUsername(username) {
        console.log("inside user.model.js findUserByUsername");
            var deferred = q.defer();
            userModel.find({username : username}, function(err, user){
                            deferred.resolve(user);
                        });
            return deferred.promise;
        }

        function findAllUsers() {
        console.log("inside user.model.js findAll");
            var deferred = q.defer();
            userModel.find(function(err, users){
                deferred.resolve(users);
            });
            return deferred.promise;
        }

        function deleteUser(userId) {
        console.log("inside user.model.js deleteUser");
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

        function addNewUser(newUser) {
        console.log("inside user.model.js addNewUser");
            var deferred = q.defer();
            console.log(newUser);
            userModel.create(newUser, function(err, doc){
                 deferred.resolve(doc);
            });
            return deferred.promise;
        }

        function updateUser(userId, userObj) {
        console.log("inside user.model.js updateUser");
            var deferred = q.defer();
            userModel.update({_id: userId}, {$set: userObj}, function(err, user) {
                     if(err) {
                         deferred.reject(err);
                     } else {
                         deferred.resolve(user);
                     }
                 });
            return deferred.promise;
        }

};

