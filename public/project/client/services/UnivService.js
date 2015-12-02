(function () {
    angular
        .module("AcademiaApp")
        .factory("UnivService", UnivService);

    function UnivService ($http, $q) {

        var url = "https://inventory.data.gov/api/action/datastore_search?resource_id=38625c3d-5388-4c16-a30f-d105432553a4&q=UNIVNAME&limit=5&callback=JSON_CALLBACK";

        var api = {
            searchUnivByTitle : searchUnivByTitle,
        };
        return api;

        function searchUnivByTitle (name) {
            var deferred = $q.defer();
            var searchUrl = url.replace("UNIVNAME", name);

            $http
                .jsonp(data)
                .success(function(response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

    }
}) ();