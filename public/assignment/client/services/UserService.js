(function(){
    'use strict';
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService($http, $q) {

        var api = {
            findAllUsers: findAllUsers,
            findUserById: findUserById,
            findUserByUsername: findUserByUsername,
            findUserByUsernameAndPassword: findUserByUsernameAndPassword,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser
        };
        return api;

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


        function createUser(userObj) {
            var deferred = $q.defer();
            userObj.id = uniqueId();
            $http.post("/api/assignment/user/", userObj)
                .success(function(users){
                    deferred.resolve(users);
                });

            return deferred.promise;
//            userObj.id = uniqueId();
//            allUsers.push(userObj);
//            callback(userObj);
        }

        function findAllUsers() {
            var deferred = $q.defer();
            $http.get("/api/assignment/user/")
                .success(function(users){
                    deferred.resolve(users);
                });

            return deferred.promise;
           //callback(allUsers);
        }

        function findUserById(userId) {
            var deferred = $q.defer();
            $http.get("/api/assignment/user/"+userId)
                .success(function(user){
                    deferred.resolve(user);
                });

            return deferred.promise;
        }

        function findUserByUsernameAndPassword(username, password) {
            var deferred = $q.defer();
            $http.get("/api/assignment/user?username=" + username + "&password=" + password)
                .success(function(user){
                    deferred.resolve(user);
                });

            return deferred.promise;

//            for(var user in allUsers) {
//                if(allUsers[user].username.localeCompare(username) == 0 &&
//                allUsers[user].password.localeCompare(password) == 0) {
//                    console.log("Found user!");
//                    callback(allUsers[user]);
//                }
//            }
//            callback(null);
        }

        function findUserByUsername(username) {
            var deferred = $q.defer();
            $http.get("/api/assignment/user?username=" + username)
                .success(function(user){
                    deferred.resolve(user);
                });

            return deferred.promise;
        }

        function deleteUserById(userId) {
            var deferred = $q.defer();
            $http.delete("/api/assignment/user/" + userId)
                .success(function(users){
                    deferred.resolve(users);
                });

            return deferred.promise;

//            for(var user in allUsers) {
//                if(allUsers[user].id.localeCompare(userId) == 0) {
//                    allUsers.splice(userId, 1);
//                }
//            }
//           callback(allUsers);
        }

        function updateUser(userId, userObj) {
            var deferred = $q.defer();

            $http.post("/api/assignment/user/"+userId, userObj)
                .success(function(user){
                    deferred.resolve(user);
                });

            return deferred.promise;
        }


//            for(var user in allUsers) {
//               if(allUsers[user].id.localeCompare(userId) == 0) {
//                    allUsers[user].username = userObj.username;
//                    allUsers[user].password = userObj.password;
//                    allUsers[user].email = userObj.email;
//                    allUsers[user].firstName = userObj.firstName;
//                    allUsers[user].lastName = userObj.lastName;
//                    callback(allUsers[user]);
//                }
//            }
//            callback(userObj);
    }
})();