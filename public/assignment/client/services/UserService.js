(function(){
    'use strict';
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService() {

        function uniqueId() {
          function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
          }
          return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
        }

        var allUsers = [
            {username: "divya127", password: "test123", id: "123" , email: "divya@gmail.com", firstName: "Divya", lastName: "Anush"},
            {username: "admin", password: "admin", id: "456", email: "admin@gmail.com", firstName: "admin", lastName: "admin"}
        ];

        var service = {
            findAllUsers: findAllUsers,
            findUserByUsernameAndPassword: findUserByUsernameAndPassword,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser
        };
        return service;

        function createUser(userObj, callback) {
            userObj.id = uniqueId();
            allUsers.push(userObj);
            callback(userObj);
        }

        function findAllUsers(callback) {
           callback(allUsers);
        }

        function findUserByUsernameAndPassword(username, password, callback) {
            for(var user in allUsers) {
                if(allUsers[user].username.localeCompare(username) == 0 &&
                allUsers[user].password.localeCompare(password) == 0) {
                    console.log("Found user!");
                    callback(allUsers[user]);
                }
            }
            callback(null);
        }

        function deleteUserById(userId, callback) {
            for(var user in allUsers) {
                if(allUsers[user].id.localeCompare(userId) == 0) {
                    allUsers.splice(userId, 1);
                }
            }
           callback(allUsers);
        }

        function updateUser(userId, userObj, callback) {
            for(var user in allUsers) {
               if(allUsers[user].id.localeCompare(userId) == 0) {
                    allUsers[user].username = userObj.username;
                    allUsers[user].password = userObj.password;
                    allUsers[user].email = userObj.email;
                    allUsers[user].firstName = userObj.firstName;
                    allUsers[user].lastName = userObj.lastName;
                    callback(allUsers[user]);
                }
            }
            callback(userObj);
        }
    }
})();