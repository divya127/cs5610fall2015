(function(){
    'use strict';
    angular
        .module("AcademiaApp")
        .controller("LoginController", LoginController);

    function LoginController(UserService, $rootScope, $location, ProfileService) {
        var model = this;
        model.login = login;
        model.curid = $rootScope.curid;

        function init() {
            ProfileService.getLoggedIn()
            .then(function(response){
                if (response !== '0'){
                    $location.url('/account');
                }
            });
        }
         init();

        function login() {
            var username = model.username;
            var pwd = model.pwd;
            console.log("Inside Login");
            UserService.findUserByUsernameAndPassword(username, pwd)
            .then(function(response){
                console.log("FOund user: " + response);
                $rootScope.curusername = response[0].username;
                $rootScope.curpwd = response[0].password;
                $rootScope.curid = response[0]._id;
                $rootScope.curemail = response[0].email;
                $rootScope.accountType = response[0].accountType;
                $rootScope.firstName = response[0].firstName;
                $rootScope.lastName = response[0].lastName;

                $location.url("/profile/"+response[0]._id);
            });
        }
    }
})();