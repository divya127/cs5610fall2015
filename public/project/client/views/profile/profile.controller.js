(function(){
    'use strict';
    angular
        .module("AcademiaApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, $rootScope, ProfileService) {

        $scope.username = $rootScope.curusername;
        $scope.pwd = $rootScope.curpwd;
        $scope.email = $rootScope.curemail;
        $scope.firstname = $rootScope.firstname;
        $scope.lastname = $rootScope.lastname;

        var model = this;
        function init() {
        console.log("inside form controller" + $rootScope.curid);
            var userId = "123";
         ProfileService.findProfileForUser(userId)
                    .then(function(forms){
                        console.log("Fetched profile: " + forms);
                        model.profile = forms[0];
                    });
         }
         init();

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