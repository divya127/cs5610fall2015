(function(){
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, UserService, $rootScope) {

        $scope.user.username = $rootScope.curusername;
        $scope.user.pwd = $rootScope.curpwd;
        $scope.user.email = $rootScope.curemail;

        $scope.update = function(){
            var userobj = {username: $scope.user.username, password: $scope.user.pwd, id: id2,
            email: $scope.user.email, firstName: $scope.firstname, lastName: $scope.lastname} ;

            var user = UserService.updateUser($rootScope.curid, userobj);

            $rootScope.curusername = user.username;
            $rootScope.curpwd = user.password;
            $rootScope.curid = user.id;
            $rootScope.curemail = user.email;

            alert($rootScope.curid);

            $scope.$location.url("/profile");
        }
    }
})();