(function(){
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, UserService) {

        $rootScope = UserService.findUserByUsernameAndPassword();

        $scope.login = function() {
            var user = UserService.findUserByUsernameAndPassword($scope.user.username, $scope.user.pwd);
        }
    }
})();