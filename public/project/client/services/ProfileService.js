(function(){
    'use strict';
    angular
        .module("AcademiaApp")
        .factory("ProfileService", ProfileService);

    function ProfileService($http, $q) {

        var api = {
           findProfileForUser : findProfileForUser,
           findAllProfiles : findAllProfiles,
           deleteProfile : deleteProfile,
           addNewProfile : addNewProfile,
           updateProfile : updateProfile,
           findProfileById : findProfileById
        };
        return api;

        function addNewProfile(userObj) {
            var deferred = $q.defer();
            $http.post("/api/project/profile", userObj)
                .success(function(users){
                    deferred.resolve(users);
                });

            return deferred.promise;
        }

        function findAllProfiles() {
            var deferred = $q.defer();
            $http.get("/api/project/profile")
                .success(function(users){
                    deferred.resolve(users);
                });

            return deferred.promise;
        }

        function findProfileById(profId) {
            var deferred = $q.defer();
            $http.get("/api/project/profile/"+profId)
                .success(function(user){
                    deferred.resolve(user);
                });

            return deferred.promise;
        }

        function findProfileForUser(userId) {
            var deferred = $q.defer();
            $http.get("/api/project/profile/user/" + userId)
                .success(function(user){
                    deferred.resolve(user);
                });

            return deferred.promise;
        }

        function deleteProfile(userId) {
            var deferred = $q.defer();
            $http.delete("/api/project/profile/" + userId)
                .success(function(users){
                    deferred.resolve(users);
                });

            return deferred.promise;

        }

        function updateProfile(userId, userObj) {
            var deferred = $q.defer();

            $http.put("/api/project/profile/"+userId, userObj)
                .success(function(user){
                    deferred.resolve(user);
                });

            return deferred.promise;
        }

    }

})();