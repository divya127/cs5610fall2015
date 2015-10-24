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

        var id1 = uniqueId();
        var id2 = uniqueId();
        var allUsers = [
            {username: "divya127", password: "test123", id: id1 , email: "divya@gmail.com", firstName: "Divya", lastName: "Anush"},
            {username: "admin", password: "admin", id: id2, email: "admin@gmail.com", firstName: "admin", lastName: "admin"}
        ];

        var service = {
            findAllUsers: findAllUsers,
            findUserByUsernameAndPassword: findUserByUsernameAndPassword,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser
        };
        return service;

        function createUser(username, password, email, callback) {
            var id = uniqueId();
            var newUser = {username: username, password: password, id: id , email: email};
            allUsers.push(newUser);
            callback(newUser);
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