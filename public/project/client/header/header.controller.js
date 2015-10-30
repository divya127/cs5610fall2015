(function() {
    'use strict';
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope, $location)
    {
        $scope.headerHello = "Hello from Header!" ;
    }
})();