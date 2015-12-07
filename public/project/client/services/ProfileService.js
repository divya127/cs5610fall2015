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
           findProfileById : findProfileById,
           addUnivToAppliedList : addUnivToAppliedList,
           exportProfile : exportProfile

        };
        return api;

        function exportProfile(userId) {
            var deferred = $q.defer();
            $http.get("/api/project/profile/export/" + userId)
                .success(function(users){
                    deferred.resolve(users);
                });

            return deferred.promise;
        }

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
            console.log("Client server find profile for user: " + userId);
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

        function addUnivToAppliedList(userId, univName, mailObj) {
            var deferred = $q.defer();
            var univObj = {univName : univName};

            $http.post("/send", mailObj) //:to/:subs/:content
                .success(function(user){
                    $http.put("/api/project/profile/"+userId+"/univ/"+univName, univObj)
                            .success(function(user){
                                deferred.resolve(user);
                            });
                });

            return deferred.promise;
        }

    }

})();