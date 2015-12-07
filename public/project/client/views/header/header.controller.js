(function() {
    'use strict';
    angular
        .module("AcademiaApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope, $location, ProfileService, $rootScope, UserService)
    {
        $scope.$location = $location;
        $scope.curid = $rootScope.curid;

        $scope.search = function() {
            console.log("Inside search: " + $scope.model.searchTerm);
                $location.url("/search/" + $scope.model.searchTerm);
        }

        $scope.getUrl = function() {
            $location.url("/profile/" + $rootScope.curid);
        }

        $scope.logout = function () {
        UserService.logout()
            .then(function(res) {
            $rootScope.curusername = null;
            $rootScope.curpwd = null;
            $rootScope.curid = null;
            $rootScope.curemail = null;
            $rootScope.accountType = null;
            $rootScope.firstName = null;
            $rootScope.lastName = null;

            $location.url("/home");
            });
        }
    }
})();