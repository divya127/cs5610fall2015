(function () {
'use strict';
    angular
        .module("AcademiaApp")
        .factory("UnivService", UnivService);

    function UnivService ($http, $q) {

        var api = {
            findUnivById : findUnivById,
            findUnivByName : findUnivByName,
            findAllUnivs: findAllUnivs,
            deleteUniv : deleteUniv,
            addNewUniv : addNewUniv,
            updateUniv: updateUniv
        };
        return api;

        function findUnivByName (name) {
            var deferred = $q.defer();
            $http.get("/api/project/univ/uname=" + name)
                .success(function(user){
                    deferred.resolve(user);
                });
            return deferred.promise;
        }
}) ();