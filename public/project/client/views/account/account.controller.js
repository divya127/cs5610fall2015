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
            UserService.findUserById(model.curUserId)
                 .then(function(usr){
                        console.log("Found user! " + usr);
                        model.currentUser = usr;
                 });
        } init();

        function update() {
            console.log("Inside update");
            UserService.updateUser(model.curUserId, model.currentUser)
            .then(function(res){
                alert("Updated Successfully!!");
            });
        }

        function goToProfile(){
            $location.url('/profile/'+ model.curUserId);
        }
    }

})();
