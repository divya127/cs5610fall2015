(function(){
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, UserService) {

        $rootScope = UserService.findUserByUsernameAndPassword();

        $scope.update = function(index) {
            console.log(index);
            $scope.courses.splice(index, 1);
        }
    }
})();