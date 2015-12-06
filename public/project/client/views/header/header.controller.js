(function() {
    'use strict';
    angular
        .module("AcademiaApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope, $location, ProfileService, $rootScope)
    {
        $scope.$location = $location;
        $scope.curid = $rootScope.curid;

        $scope.search = function() {
            console.log("Inside search: " + $scope.model.searchTerm);
                $location.url("/search/" + $scope.model.searchTerm);
        }
    }
})();