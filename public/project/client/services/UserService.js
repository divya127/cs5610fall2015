(function(){
    'use strict';
    angular
        .module("AcademiaApp")
        .factory("UserService", UserService);

    function UserService($http, $q) {

        var api = {
            findAllUsers: findAllUsers,
            findUserById: findUserById,
            findUserByUsername: findUserByUsername,
            findUserByUsernameAndPassword: findUserByUsernameAndPassword,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser,
            findByFirstNameOrLastName : findByFirstNameOrLastName,
            logout : logout,
            getRandomProfiles : getRandomProfiles
        };
        return api;

        function getRandomProfiles(userId) {
            console.log("INside randome profiles Client side service!!!");
                 var deferred = $q.defer();
                $http.get("/api/project/profile/random/"+ userId)
                    .success(function(users){
                        deferred.resolve(users);
                    });

                return deferred.promise;
            }

        function logout() {
            var deferred = $q.defer();
            $http.post("/api/project/logout")
                .success(function(res){
                    deferred.resolve(res);
                });

            return deferred.promise;
        }

        function findByFirstNameOrLastName(term){
            var deferred = $q.defer();
            $http.get("/api/project/user/search/"+term)
                .success(function(users){
                    deferred.resolve(users);
                });

            return deferred.promise;

        }

        function createUser(userObj) {
            var deferred = $q.defer();
            $http.post("/api/project/user/", userObj)
                .success(function(users){
                    deferred.resolve(users);
                });

            return deferred.promise;
        }

        function findAllUsers() {
            var deferred = $q.defer();
            $http.get("/api/project/user/")
                .success(function(users){
                    deferred.resolve(users);
                });

            return deferred.promise;
        }

        function findUserById(userId) {
            var deferred = $q.defer();
            $http.get("/api/project/user/"+userId)
                .success(function(user){
                    deferred.resolve(user);
                });

            return deferred.promise;
        }

        function findUserByUsernameAndPassword(username, password) {
            var user = {
                username : username,
                password : password
            };
            var deferred = $q.defer();
            $http.post("/api/project/login", user)
                .success(function(user12){
                    console.log("inside client side" + user12);
                    deferred.resolve(user12);
                });

            return deferred.promise;
        }

        function findUserByUsername(username) {
            var deferred = $q.defer();
            $http.get("/api/project/user/username=" + username)
                .success(function(user){
                    deferred.resolve(user);
                });

            return deferred.promise;
        }

        function deleteUserById(userId) {
            var deferred = $q.defer();
            $http.delete("/api/project/user/" + userId)
                .success(function(users){
                    deferred.resolve(users);
                });

            return deferred.promise;

        }

        function updateUser(userId, userObj) {
            var deferred = $q.defer();
            console.log("UserService userid update: " + userId);
            $http.put("/api/project/user/"+userId, userObj)
                .success(function(user){
                    deferred.resolve(user);
                });

            return deferred.promise;
        }

    }
})();