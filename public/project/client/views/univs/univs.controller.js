(function() {
	'use strict';
	angular
		.module("AcademiaApp")
		.controller("UnivController", UnivController);

	function UnivController (UnivService, $sce) {
		var model = this;
		model.search = search;
		model.navigate = navigate;

		function search () {
			UnivService.findUnivByName(model.name).then(function(response){
				model.results = response;
				console.log(response);
			});
		}

		function navigate(url) {
			console.log("link model function");
			return $sce.trustAsResourceUrl(url);
		}
	}
}) ();