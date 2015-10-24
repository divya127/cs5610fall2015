(function(){
    'use strict';
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, UserService, $rootScope) {

        $scope.login = function() {
            UserService.findUserByUsernameAndPassword($scope.user.username, $scope.user.pwd, finduser);
        }

        function finduser(){
        console.log("inside callback");
            $rootScope.curusername = user.username;
            $rootScope.curpwd = user.password;
            $rootScope.curid = user.id;
            $rootScope.curemail = user.email;

            if (user != null) {
                $scope.$location.url("/profile");
            }
        }
    }
})();