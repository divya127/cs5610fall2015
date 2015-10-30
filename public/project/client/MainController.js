(function(){
    'use strict';
    angular
        .module("AcademiaApp")
        .controller("MainController", MainController);

    function MainController($scope, $location, $rootScope) {
        $scope.$location = $location;
    }
})();