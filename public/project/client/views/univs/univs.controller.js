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

		function mail (univName, adminurl) {
		ProfileService.findProfileForUser("123").then(function(response){
				var recos = response[0].recommendations;
				var mailString = "";
				for(var reco in recos){
					mailString += "Professor Name: " + recos[reco].authorName + " \nrecommendation Letter: " + recos[reco].content + " ";
				}

				console.log("mailString " + mailString);
				var mailObj = {
					"to" : "admissions@"+adminurl,
					"subject" : "Recommendation Letters for " + "Devaraj" + " " + "Divya",//$rootScope.user.firstName,
					"content" : mailString
				};

				ProfileService.addUnivToAppliedList("123" , univName).then(function(response){
                				$location.url("/profile/123"); //replace by USerId
                			});

			})
		}

	}
}) ();