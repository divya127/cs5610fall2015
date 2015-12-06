(function(){
    'use strict';
    angular
        .module("AcademiaApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, $rootScope, ProfileService, OtherService, $routeParams, UserService) {

        var model = this;
        model.username = $rootScope.curusername;
        model.pwd = $rootScope.curpwd;
        model.email = $rootScope.curemail;
        model.curUserId = $rootScope.curid;
        model.accountType = $rootScope.accountType;
        model.firstName = $rootScope.firstName;
        model.lastName = $rootScope.lastName;

        model.profUserId = $routeParams.userId;

        model.endorse = endorse;
        model.editmode = false;
        model.EditModeReco = EditModeReco;
        model.addReco = addReco;
        model.deleteReco = deleteReco;
        model.selectReco = selectReco;
        model.updateReco = updateReco;
        model.disableEditReco = disableEditReco;

        model.editSkillmode = false;
        model.updateSkill = updateSkill;
        model.addSkill = addSkill;
        model.selectSkill = selectSkill;
        model.deleteSkill = deleteSkill;
        model.enableEditModeSkill = enableEditModeSkill;
        model.disableEditModeSkill = disableEditModeSkill;

        model.editClubmode = false;
        model.updateClub = updateClub;
        model.addClub = addClub;
        model.selectClub = selectClub;
        model.deleteClub = deleteClub;
        model.enableEditClubmode = enableEditClubmode;
        model.disableEditClubmode = disableEditClubmode;

        model.editProjmode = false;
        model.updateProj = updateProj;
        model.addProj = addProj;
        model.selectProj = selectProj;
        model.deleteProj = deleteProj;
        model.enableEditProjmode = enableEditProjmode;
        model.disableEditProjMode = disableEditProjMode;

        model.editTestScoremode = false;
        model.updateScore = updateScore;
        model.addScore = addScore;
        model.selectScore = selectScore;
        model.deleteScore = deleteScore;
        model.enableEditTestScoremode = enableEditTestScoremode;
        model.disableEditTestScoremode = disableEditTestScoremode;

        model.editPubmode = false;
        model.updatePub = updatePub;
        model.addPub = addPub;
        model.selectPub = selectPub;
        model.deletePub = deletePub;
        model.enableEditPubmode = enableEditPubmode;
        model.disableEditPubMode = disableEditPubMode;


        // Publications
        function deletePub(ProjId){
            OtherService.deletePublicationForUser(ProjId, model.profUserId)
                    .then(function(resp){
                        console.log("Deleted ! " + resp);
                        model.profile = resp;
                    });
        }

        function updatePub(){
            var ProjObj = {
                "title" : model.pubTitle,
                "members" : model.pubMembers,
                "description" : model.pubDesc
            };
            OtherService.updatePublicationForUser(model.currentPubId, model.profUserId, ProjObj)
            .then(function(res){
                model.profile = res;
            });
        }

        function addPub(){
            var ProjObj = {
                "title" : model.pubTitle,
                "members" : model.pubMembers,
                "description" : model.pubDesc
            };
            OtherService.addNewPublicationForUser(model.profUserId, ProjObj)
            .then(function(res){
                console.log("Updated skill : " + res);
                model.profile = res;
            });
        }

        function selectPub(ProjId){
            console.log("Inside select");
            OtherService.findPublicationById(ProjId, model.profUserId)
            .then(function(res){
            console.log("selected pub: " + res);
                model.pubTitle = res.title;
                model.pubMembers = res.members;
                model.pubDesc = res.description;
                model.currentPubId = res._id;
            });

        }

        function disableEditPubMode(){
            console.log("Setting edit more to FALSE");
            model.editPubmode = false;
        }

        function enableEditPubmode() {
            console.log("Setting edit more to true");
            model.editPubmode = true;
        }

        // Test Scores
        function deleteScore(testId){
            OtherService.deleteTestScoreForUser(testId, model.profUserId)
                    .then(function(resp){
                        console.log("Deleted ! " + resp);
                        model.profile = resp;
                    });
        }

        function updateScore(){
            var ProjObj = {
                "test" : model.testnameText,
                "scoreAcheived" : model.scoreText,
                "org" : model.testOrgText,
                "scoreMax" : model.scoreMaxText
            };
            OtherService.updateTestScoreForUser(model.currentScoreId, model.profUserId, ProjObj)
            .then(function(res){
                model.profile = res;
            });
        }

        function addScore(){
            var ProjObj = {
                "test" : model.testnameText,
                "scoreAcheived" : model.scoreText,
                "org" : model.testOrgText,
                "scoreMax" : model.scoreMaxText
            };
            OtherService.addNewTestScoreForUser(model.profUserId, ProjObj)
            .then(function(res){
                console.log("Updated skill : " + res);
                model.profile = res;
            });
        }

        function selectScore(testId){
            OtherService.findTestScoreById(testId, model.profUserId)
            .then(function(res){
                model.testnameText = res.test;
                model.scoreText = res.scoreAcheived;
                model.testOrgText = res.org;
                model.scoreMaxText = res.scoreMax;
                model.currentScoreId = res._id;
            });

        }

        function disableEditTestScoremode(){
            console.log("Setting edit more to FALSE");
            model.editTestScoremode = false;
        }

        function enableEditTestScoremode() {
            console.log("Setting edit more to true");
            model.editTestScoremode = true;
        }


        // Projs
        function deleteProj(ProjId){
            OtherService.deleteProjectForUser(ProjId, model.profUserId)
                    .then(function(resp){
                        console.log("Deleted ! " + resp);
                        model.profile = resp;
                    });
        }

        function updateProj(){
            var ProjObj = {
                "title" : model.projTitle,
                "description" : model.projDesc
            };
            OtherService.updateProjectForUser(model.currentProjId, model.profUserId, ProjObj)
            .then(function(res){
                model.profile = res;
            });
        }

        function addProj(){
            var ProjObj = {
                "title" : model.projTitle,
                "description" : model.projDesc
            };
            console.log("New proj " + ProjObj.title + " " + ProjObj.description);
            OtherService.addNewProjectForUser(model.profUserId, ProjObj)
            .then(function(res){
                console.log("Updated proj : " + res.title + " " + res.description);
                model.profile = res;
            });
        }

        function selectProj(ProjId){
            OtherService.findProjectById(ProjId, model.profUserId)
            .then(function(res){
                model.projTitle = res.title;
                model.projDesc = res.description;
                model.currentProjId = res._id;
            });

        }

        function disableEditProjMode(){
            console.log("Setting edit more to FALSE");
            model.editProjmode = false;
        }

        function enableEditProjmode() {
            console.log("Setting edit more to true");
            model.editProjmode = true;
        }


        // Clubs
        function deleteClub(clubId){
            OtherService.deleteClubForUser(clubId, model.profUserId)
                    .then(function(resp){
                        console.log("Deleted ! " + resp);
                        model.profile = resp;
                    });
        }

        function updateClub(){
            var clubObj = {
                "clubName" : model.clubText
            };
            OtherService.updateClubForUser(model.currentClubId, model.profUserId, clubObj)
            .then(function(res){
                model.profile = res;
            });
        }

        function addClub(){
            var clubObj = {
                "clubName" : model.clubText
            };
            OtherService.addNewClubForUser(model.profUserId, clubObj)
            .then(function(res){
                console.log("Updated skill : " + res);
                model.profile = res;
            });
        }

        function selectClub(clubId){
            OtherService.findClubById(clubId, model.profUserId)
            .then(function(res){
                model.clubText = res.clubName;
                model.currentClubId = res._id;
            });

        }

        function disableEditClubmode(){
            model.editClubmode = false;
        }

        function enableEditClubmode() {
            model.editClubmode = true;
        }

         // Skills
        function deleteSkill(skillId){
            OtherService.deleteSkillForUser(skillId, model.profUserId)
                    .then(function(resp){
                        console.log("Deleted ! " + resp);
                        model.profile = resp;
                    });
        }

        function updateSkill(){
            var skillObj = {
                "title" : model.skillText,
                "count" : model.currentSkillCount
            };
            OtherService.updateSkillsForUser(model.currentSkillId, model.profUserId, skillObj)
            .then(function(res){
                model.profile = res;
            });
        }

        function addSkill(){
            var skillObj = {
                "title" : model.skillText,
                "count" : 0
            };
            OtherService.addNewSkillForUser(model.profUserId, skillObj)
            .then(function(res){
                console.log("Updated skill : " + res);
                model.profile = res;
            });
        }

        function selectSkill(skillId){
            OtherService.findSkillById(skillId, model.profUserId)
            .then(function(res){
                model.skillText = res.title;
                model.currentSkillId = res._id;
                model.currentSkillCount = res.count;
            });

        }

        function disableEditModeSkill(){
            model.editSkillmode = false;
        }

        function enableEditModeSkill() {
            model.editSkillmode = true;
        }

        function addReco() {
            var authorId = model.curUserId;
            var authorName = model.firstName + " " + model.lastName;

            var recoObj = {
                "content" : model.recoTextArea,
                "authorId" : authorId,
                "authorName" : authorName,
                "receipientId" : model.profUserId
                };

                OtherService.addNewRecoForUser(authorId, model.profUserId, recoObj)
                            .then(function(prof){
                                model.profile = prof;
                            });
        }

        function EditModeReco(){
            model.editmode = true;
        }

        function disableEditReco(){
            model.editmode = false;
        }

        function deleteReco(recoId){
            OtherService.deleteRecoForUser(recoId, model.profUserId)
            .then(function(resp){
                console.log("Deleted ! " + resp);
                model.profile = resp;
            });
        }

        function init() {
        console.log("inside form controller" + $rootScope.curid);
            //var userId = "123";
         ProfileService.findProfileForUser(model.profUserId)
                    .then(function(forms){
                        console.log("Fetched profile: " + forms);
                        model.profile = forms[0];
                    });
             UserService.findUserById(model.profUserId)
             .then(function(usr){
                    model.user = usr;
             });
         }
         init();

        $scope.update = function(){
            var userobj = {username: $scope.username, password: $scope.pwd, id: $rootScope.curid,
            email: $scope.email, firstName: $scope.firstname, lastName: $scope.lastname};
        }

        function endorse(skillId, title, count) {
            var skillObj = {
                "title" : title,
                "count" : count + 1
            };
            OtherService.updateSkillsForUser(skillId, model.profUserId, skillObj)
                        .then(function(forms){
                            model.profile = forms;
                        });
        }

        function selectReco(recoId) {
            console.log("inside select Reco");
            OtherService.findRecoById(recoId, model.profUserId)
                          .then(function(resp){
                          console.log("Reco received: " + resp.content);
                            model.recoTextArea = resp.content;
                            model.currentRecoId = resp._id;
                          });

        }

        function updateReco() {
            var recoObj = {
                content : model.recoTextArea
            };
            OtherService.updateRecoForUser(model.currentRecoId, model.profUserId, recoObj)
            .then(function(resp){
                console.log("Update reco: " + resp);
                model.profile = resp;
            });
        }
    }
})();