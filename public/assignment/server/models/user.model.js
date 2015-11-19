//var users = require('../models/user.mock.json');
var q = require("q");

module.exports = function(mongoose, db) {

    var UserSchema = mongoose.Schema({
        "firstName": String,
        "lastName" : String,
        "username" : String,
        "password" : String
    }, {collection: "user"});

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
        console.log("inside user.model.js findUserById");
            var deferred = q.defer();
            for(var user in users) {
                if(users[user].id.localeCompare(userId) == 0) {
                    deferred.resolve(users[user]);
                }
            }
            return deferred.promise;
        }

        function findUserByCredentials(credentials) {
        console.log("inside user.model.js findUserByCredentials");
            var deferred = q.defer();
            for(var user in users) {
                if(users[user].username.localeCompare(credentials.username) == 0 &&
                   users[user].password.localeCompare(credentials.password) == 0) {
                    deferred.resolve(users[user]);
                }
            }
            return deferred.promise;
        }

        function findUserByUsername(username) {
        console.log("inside user.model.js findUserByUsername");
            var deferred = q.defer();
            for(var user in users) {
                if(users[user].username.localeCompare(username) == 0) {
                    deferred.resolve(users[user]);
                }
            }
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
            for(var user in users) {
                if(users[i].id == userId) {
                    users.splice(user, 1);
                    deferred.resolve(users);
                }
            }
            return deferred.promise;
        }

        function addNewUser(newUser) {
        console.log("inside user.model.js addNewUser");
            var deferred = q.defer();
            console.log(newUser);
            userModel.create(newUser, function(err, doc){
                 deferred.resolve(doc);
            })
            //users.push(newUser);
            return deferred.promise;
        }

        function updateUser(userId, userObj) {
        console.log("inside user.model.js updateUser");
            var deferred = q.defer();
            for(var i = 0; i < users.length; i++)  {
            console.log(users[i].id);
                if(users[i].id == userId) {
                    users[i].username = userObj.username;
                    users[i].password = userObj.password;
                    users[i].firstName = userObj.firstName;
                    users[i].lastName = userObj.lastName;
                    deferred.resolve(users[i]);
                }
            }
            return deferred.promise;
        }

};

