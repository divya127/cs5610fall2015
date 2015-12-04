(function () {
'use strict';
    angular
        .module("AcademiaApp")
        .factory("UnivService", UnivService);

    function UnivService ($http, $q) {

        var api = {
            findUnivByName : findUnivByName,
//            findAllUnivs: findAllUnivs,
//            deleteUniv : deleteUniv,
//            addNewUniv : addNewUniv,
//            updateUniv: updateUniv,
//            findUnivById : findUnivById
        };
        return api;

        function findUnivByName (name) {
            var deferred = $q.defer();
            console.log("Client uname: " + name);
            $http.get("/api/project/univ/" + name)
                .success(function(user){

                    deferred.resolve(user);
                });
            return deferred.promise;
        }
    }
})();