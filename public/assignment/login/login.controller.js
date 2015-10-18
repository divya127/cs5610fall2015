(function(){
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, UserService) {

        $rootScope = UserService.findUserByUsernameAndPassword();

        $scope.login = function(index) {
            console.log(index);
            $scope.courses.splice(index, 1);
        }
    }
})();