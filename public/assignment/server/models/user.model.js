var users = require('../models/user.mock.json');
var q = require("q");

module.exports = function(app) {

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

        function findUserById(id) {
            for(var user in users) {
                if(users[user].id.localeCompare(userId) == 0) {
                    res.json(users[user]);
                }
            }
            res.json(null);
        }

        function findUserByCredentials(credentials) {
            for(var user in users) {
                if(users[user].username.localeCompare(credentials.username) == 0 &&
                   users[user].password.localeCompare(credentials.password) == 0) {
                    res.json(users[user]);
                }
            }
            res.json(null);
        }

        function findUserByUsername(username) {
            for(var user in users) {
                if(users[user].username.localeCompare(username) == 0) {
                    res.json(users[user]);
                }
            }
            res.json(null);
        }

        function findAllUsers() {
            var deferred = q.defer();
            deferred.resolve(users);
            return deferred.promise;
        }

        function deleteUser(userId) {
            for(var user in users) {
                if(users[user].id.localeCompare(userId) == 0) {
                    users.splice(user, 1);
                    res.json(users);
                }
            }
            res.json(users);
        }

        function addNewUser(newUser) {
            var newUser = newUser;
            console.log(newUser);
            users.push(newUser);
            res.json(users);
        }

        function updateUser(userId, userObj) {
            for(var user in users) {
                if(users[user].id.localeCompare(userId) == 0) {
                    users[user].username = userObj.username;
                    users[user].password = userObj.password;
                    users[user].firstName = userObj.firstName;
                    users[user].lastName = userObj.lastName;
                    res.json(users[user]);
                }
            }
            res.json(null);
        }
};

