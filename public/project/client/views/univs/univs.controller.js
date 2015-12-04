(function() {
	'use strict';
	angular
		.module("AcademiaApp")
		.controller("UnivController", UnivController);

	function UnivController (UnivService, ProfileService, $rootScope, $location) {
		var model = this;
		model.search = search;
		model.mail = mail;

		function search () {
			UnivService.findUnivByName(model.name).then(function(response){
				var res = JSON.parse(response);
				console.log("Received resposne : " + res);
				model.results = res.result.records;
			});
		}

		function mail (univName) {
		//$rootScope.curid
			ProfileService.addUnivToAppliedList("123" , univName).then(function(response){
				$location.url("/profile");
			});
		}

	}
}) ();