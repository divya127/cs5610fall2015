(function(){
    'use strict';
    angular
        .module("AcademiaApp")
        .factory("OtherService", OtherService);

    function OtherService($http, $q) {

        var api = {
           findSkillsByUserId : findSkillsByUserId,
           deleteSkillForUser : deleteSkillForUser,
           addNewSkillForUser : addNewSkillForUser,
           updateSkillsForUser : updateSkillsForUser,
           findSkillById : findSkillById,

           findRecoByUserId : findRecoByUserId,
           deleteRecoForUser : deleteRecoForUser,
           addNewRecoForUser : addNewRecoForUser,
           updateRecoForUser : updateRecoForUser,
           findRecoById : findRecoById
        };
        return api;

        function findSkillsByUserId(userId) {
            var deferred = $q.defer();
            $http.get("/api/project/profile/skills/user/"+userId)
                .success(function(user){
                    deferred.resolve(user);
                });

            return deferred.promise;
        }

        function findRecoByUserId(userId) {
            var deferred = $q.defer();
            $http.get("/api/project/profile/reco/user/"+userId)
                .success(function(user){
                    deferred.resolve(user);
                });

            return deferred.promise;
        }

        function findSkillById(skillId, userId) {
            var deferred = $q.defer();
            $http.get("/api/project/profile/skills/"+skillId+"/user/"+userId)
                .success(function(user){
                    deferred.resolve(user);
                });

            return deferred.promise;
        }

        function findRecoById(recoId, userId) {
            var deferred = $q.defer();
            $http.get("/api/project/profile/reco/"+recoId+"/user/"+userId)
                .success(function(user){
                    deferred.resolve(user);
                });

            return deferred.promise;
        }

        function deleteSkillForUser(skillId, userId) {
            var deferred = $q.defer();
            $http.delete("/api/project/profile/skills/"+skillId+"/user/"+userId)
                .success(function(users){
                    deferred.resolve(users);
                });

            return deferred.promise;

        }

        function deleteRecoForUser(recoId, userId) {
            var deferred = $q.defer();
            $http.delete("/api/project/profile/reco/"+recoId+"/user/"+userId)
                .success(function(users){
                    deferred.resolve(users);
                });

            return deferred.promise;

        }

        function addNewSkillForUser(userId, skillObj) {
            var deferred = $q.defer();
            $http.post("/api/project/profile/skills/user/"+userId, skillObj)
                .success(function(forms){
                    deferred.resolve(forms);
                });

            return deferred.promise;
        }

        function addNewRecoForUser(authorId, receiptId, recoObj) {
            var deferred = $q.defer();
            $http.post("/api/project/profile/reco/user1/"+authorId+"/user2/"+receiptId, recoObj)
                .success(function(forms){
                    deferred.resolve(forms);
                });

            return deferred.promise;
        }

        function updateSkillsForUser(skillId, userId, skillObj) {
            var deferred = $q.defer();

            $http.put("/api/project/profile/skills/"+skillId+"/user/" + userId, skillObj)
                .success(function(form){
                    deferred.resolve(form);
                });
            return deferred.promise;
        }

        function updateRecoForUser(recoId, userId, recoObj) {
            var deferred = $q.defer();

            $http.put("/api/project/profile/reco/"+recoId+"/user/" + userId, recoObj)
                .success(function(form){
                    deferred.resolve(form);
                });
            return deferred.promise;
        }
    }

})();