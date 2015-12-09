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
            UserService.updateUser(model.curUserId, model.currentUser)
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
