(function(){
    'use strict';
    angular
        .module("AcademiaApp")
        .controller("AccountController", AccountController);

    function AccountController($rootScope, UserService, $routeParams, $location) {

        var model = this;
        model.curUserId = $rootScope.curid;
        model.update = update;
        model.goToProfile = goToProfile;

        function init(){
            console.log("Fetching account info for user: " + model.curUserId);
            UserService.findUserById(model.curUserId)
                 .then(function(usr){
                        console.log("Found user! " + usr.googleId);
                        model.currentUser = usr;
                 });
        } init();

        function update() {
            console.log("Inside update userId: " + model.curUserId);
            var usrObj = {
                username : model.currentUser.username,
                password : model.currentUser.password,
                firstName : model.currentUser.firstName,
                lastName : model.currentUser.lastName,
                email : model.currentUser.email,
                phone : model.currentUser.phone,
                accountType : model.currentUser.accountType,
                schoolName : model.currentUser.schoolName,
                tagLine : model.currentUser.tagLine,
                githubId : model.currentUser.githubId,
                facebookId : model.currentUser.facebookId,
                linkedInid : model.currentUser.linkedInid
            };

            UserService.updateUser(model.curUserId, usrObj)
            .then(function(res){
            console.log("Updated usr: " + res);
                model.currentUser = res;
            });
        }

        function goToProfile(){
            $location.url('/profile/'+ model.curUserId);
        }
    }

})();
