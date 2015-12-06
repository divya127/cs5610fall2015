(function() {
    'use strict';
    angular
        .module("AcademiaApp")
        .controller("SearchController", SearchController);

    function SearchController($scope, $location, ProfileService, $routeParams, UnivService, UserService)
    {
        var model = this;
        $scope.$location = $location;
        var searchTerm = $routeParams.term;
        model.searchTerm = searchTerm;


        function init() {
            console.log("Inside search: "+ searchTerm);
                UserService.findByFirstNameOrLastName(searchTerm)
                .then(function(res){
                    console.log("Found results: "+res);
                    model.fnresults = res[0];
                    model.lnresults = res[1];

                UnivService.findUnivByName(searchTerm).then(function(response){
                        var res = JSON.parse(response);
                        console.log("Received univ resposne : " + res);
                        model.univresults = res.result.records;
                    });
                });
            }
             init();


    }
})();