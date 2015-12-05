(function(){
    'use strict';
    angular
        .module("AcademiaApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, $rootScope, ProfileService, OtherService, $routeParams) {

        var model = this;
        $scope.username = $rootScope.curusername;
        $scope.pwd = $rootScope.curpwd;
        $scope.email = $rootScope.curemail;
        $scope.firstname = $rootScope.firstname;
        $scope.lastname = $rootScope.lastname;

        model.profUserId = $routeParams.userId;

        model.endorse = endorse;
        model.editmode = false;
        model.EditModeReco = EditModeReco;
        model.addReco = addReco;
        model.deleteReco = deleteReco;
        model.selectReco = selectReco;
        model.updateReco = updateReco;
        model.disableEditReco = disableEditReco;

        function addReco() {
            var authorId = "456"; //$rootScope.user._id
            var authorName = "Jose Annunziato"; // $rootScope.user.firstName

            var recoObj = {
                "content" : model.recoTextArea,
                "authorId" : "456",
                "authorName" : "Jose Annunziato",
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
            var userId = "123";
         ProfileService.findProfileForUser(model.profUserId)
                    .then(function(forms){
                        console.log("Fetched profile: " + forms);
                        model.profile = forms[0];
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