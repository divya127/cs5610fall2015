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
           findRecoById : findRecoById,

            //Projects
            findProjectsByUserId : findProjectsByUserId,
            deleteProjectForUser : deleteProjectForUser,
            addNewProjectForUser : addNewProjectForUser,
            updateProjectForUser : updateProjectForUser,
            findProjectById : findProjectById,

            //Clubs
            findClubsByUserId : findClubsByUserId,
            deleteClubForUser : deleteClubForUser,
            addNewClubForUser : addNewClubForUser,
            updateClubForUser : updateClubForUser,
            findClubById : findClubById,

            //TestScores
            findTestScoresByUserId : findTestScoresByUserId,
            deleteTestScoreForUser : deleteTestScoreForUser,
            addNewTestScoreForUser : addNewTestScoreForUser,
            updateTestScoreForUser : updateTestScoreForUser,
            findTestScoreById : findTestScoreById,

            //Publications
            findPublicationsByUserId : findPublicationsByUserId,
            deletePublicationForUser : deletePublicationForUser,
            addNewPublicationForUser : addNewPublicationForUser,
            updatePublicationForUser : updatePublicationForUser,
            findPublicationById : findPublicationById

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

        //*************************************************************

        function findProjectsByUserId(userId) {
            var deferred = $q.defer();
            $http.get("/api/project/profile/projects/user/"+userId)
                .success(function(user){
                    deferred.resolve(user);
                });

            return deferred.promise;
        }

        function updateProjectForUser(projId, userId, projObj) {
            var deferred = $q.defer();

            $http.put("/api/project/profile/projects/"+projId+"/user/" + userId, projObj)
                .success(function(form){
                    deferred.resolve(form);
                });
            return deferred.promise;
        }

        function findProjectById(projId, userId) {
            var deferred = $q.defer();
            $http.get("/api/project/profile/projects/"+projId+"/user/"+userId)
                .success(function(user){
                    deferred.resolve(user);
                });

            return deferred.promise;
        }

        function deleteProjectForUser(projId, userId) {
            var deferred = $q.defer();
            $http.delete("/api/project/profile/projects/"+projId+"/user/"+userId)
                .success(function(users){
                    deferred.resolve(users);
                });

            return deferred.promise;

        }

        function addNewProjectForUser(userId, projObj) {
            var deferred = $q.defer();
            console.log("Sending from client to servre projObj: "+ projObj.title + " " + projObj.description);
            $http.post("/api/project/profile/projects/user/"+userId, projObj)
                .success(function(forms){
                    deferred.resolve(forms);
                });

            return deferred.promise;
        }

        //*************************************************************

        function findClubsByUserId(userId) {
            var deferred = $q.defer();
            $http.get("/api/project/profile/clubs/user/"+userId)
                .success(function(user){
                    deferred.resolve(user);
                });

            return deferred.promise;
        }

        function updateClubForUser(clubId, userId, clubObj) {
            var deferred = $q.defer();

            $http.put("/api/project/profile/clubs/"+clubId+"/user/" + userId, clubObj)
                .success(function(form){
                    deferred.resolve(form);
                });
            return deferred.promise;
        }

        function findClubById(clubId, userId) {
            var deferred = $q.defer();
            $http.get("/api/project/profile/clubs/"+clubId+"/user/"+userId)
                .success(function(user){
                    deferred.resolve(user);
                });

            return deferred.promise;
        }

        function deleteClubForUser(clubId, userId) {
            var deferred = $q.defer();
            $http.delete("/api/project/profile/clubs/"+clubId+"/user/"+userId)
                .success(function(users){
                    deferred.resolve(users);
                });

            return deferred.promise;

        }

        function addNewClubForUser(userId, clubObj) {
            var deferred = $q.defer();
            $http.post("/api/project/profile/clubs/user/"+userId, clubObj)
                .success(function(forms){
                    deferred.resolve(forms);
                });

            return deferred.promise;
        }

        //*************************************************************

        function findTestScoresByUserId(userId) {
            var deferred = $q.defer();
            $http.get("/api/project/profile/testscores/user/"+userId)
                .success(function(user){
                    deferred.resolve(user);
                });

            return deferred.promise;
        }

        function updateTestScoreForUser(testScoreId, userId, testScoreObj) {
            var deferred = $q.defer();

            $http.put("/api/project/profile/testscores/"+testScoreId+"/user/" + userId, testScoreObj)
                .success(function(form){
                    deferred.resolve(form);
                });
            return deferred.promise;
        }

        function findTestScoreById(testScoreId, userId) {
            var deferred = $q.defer();
            $http.get("/api/project/profile/testscores/"+testScoreId+"/user/"+userId)
                .success(function(user){
                    deferred.resolve(user);
                });

            return deferred.promise;
        }

        function deleteTestScoreForUser(testScoreId, userId) {
            var deferred = $q.defer();
            $http.delete("/api/project/profile/testscores/"+testScoreId+"/user/"+userId)
                .success(function(users){
                    deferred.resolve(users);
                });

            return deferred.promise;

        }

        function addNewTestScoreForUser(userId, testScoreObj) {
            var deferred = $q.defer();
            $http.post("/api/project/profile/testscores/user/"+userId, testScoreObj)
                .success(function(forms){
                    deferred.resolve(forms);
                });

            return deferred.promise;
        }

        //*************************************************************

        function findPublicationsByUserId(userId) {
            var deferred = $q.defer();
            $http.get("/api/project/profile/pubs/user/"+userId)
                .success(function(user){
                    deferred.resolve(user);
                });

            return deferred.promise;
        }

        function updatePublicationForUser(pubId, userId, pubObj) {
            var deferred = $q.defer();

            $http.put("/api/project/profile/pubs/"+pubId+"/user/" + userId, pubObj)
                .success(function(form){
                    deferred.resolve(form);
                });
            return deferred.promise;
        }

        function findPublicationById(pubId, userId) {
            var deferred = $q.defer();
            console.log("INside client pub");
            $http.get("/api/project/profile/pubs/"+pubId+"/user/"+userId)
                .success(function(user){
                    deferred.resolve(user);
                });

            return deferred.promise;
        }

        function deletePublicationForUser(pubId, userId) {
            var deferred = $q.defer();
            $http.delete("/api/project/profile/pubs/"+pubId+"/user/"+userId)
                .success(function(users){
                    deferred.resolve(users);
                });

            return deferred.promise;

        }

        function addNewPublicationForUser(userId, pubObj) {
            var deferred = $q.defer();
            $http.post("/api/project/profile/pubs/user/"+userId, pubObj)
                .success(function(forms){
                    deferred.resolve(forms);
                });

            return deferred.promise;
        }


    }

})();