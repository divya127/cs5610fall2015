(function(){
    'use strict';
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, UserService, $rootScope) {

        $scope.login = function() {
            var username = $scope.user.username;
            var pwd = $scope.user.pwd;
            UserService.findUserByUsernameAndPassword(username, pwd, finduser);
        }

    function finduser(response){
        if (response != null) {
            $rootScope.curusername = response.username;
            $rootScope.curpwd = response.password;
            $rootScope.curid = response.id;
            $rootScope.curemail = response.email;
            $rootScope.firstname = response.firstName;
            $rootScope.lastname = response.lastName;
            $scope.$location.url("/profile");
            }
        }
    }
})();