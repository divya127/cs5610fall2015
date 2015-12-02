(function() {
	angular
		.module("AcademiaApp")
		.controller("UnivController", UnivController);

	function UnivController (UnivService) {
		var model = this;
		model.search = search;

		function search (title) {
			UnivService.searchUnivByTitle(model.name).then(function(response){
				model.results = response;
				console.log(response);
			});
		}
	}
}) ();