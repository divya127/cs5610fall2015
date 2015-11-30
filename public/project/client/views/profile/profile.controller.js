(function(){
    'use strict';
    angular
        .module("AcademiaApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, $rootScope) {

        $scope.username = $rootScope.curusername;
        $scope.pwd = $rootScope.curpwd;
        $scope.email = $rootScope.curemail;
        $scope.firstname = $rootScope.firstname;
        $scope.lastname = $rootScope.lastname;

        $scope.update = function(){
            var userobj = {username: $scope.username, password: $scope.pwd, id: $rootScope.curid,
            email: $scope.email, firstName: $scope.firstname, lastName: $scope.lastname};
        }

        function callback(response) {
            if(response != null) {
                $rootScope.curusername = response.username;
                $rootScope.curpwd = response.password;
                $rootScope.curid = response.id;
                $rootScope.curemail = response.email;
                $rootScope.firstname = response.firstName;
                $rootScope.lastname = response.lastName;
            }
        }
    }
})();