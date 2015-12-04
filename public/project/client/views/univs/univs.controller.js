(function() {
	'use strict';
	angular
		.module("AcademiaApp")
		.controller("UnivController", UnivController);

	function UnivController (UnivService, $sce) {
		var model = this;
		model.search = search;

		function search () {
			UnivService.findUnivByName(model.name).then(function(response){
				var res = JSON.parse(response);
				console.log("Received resposne : " + res);
				model.results = res.result.records;
			});
		}

	}
}) ();