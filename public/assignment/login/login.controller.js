(function(){
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, UserService, $rootScope) {

        $scope.login = function() {
            var user = UserService.findUserByUsernameAndPassword($scope.user.username, $scope.user.pwd);

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