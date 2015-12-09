(function() {
	'use strict';
	angular
		.module("AcademiaApp")
		.controller("UnivController", UnivController);

	function UnivController (UnivService, ProfileService, $rootScope, $location) {
		var model = this;
		model.search = search;
		model.mail = mail;
		model.accType = $rootScope.accountType;

		function search () {
			UnivService.findUnivByName(model.name).then(function(response){
				var res = JSON.parse(response);
				console.log("Received resposne : " + res);
				model.results = res.result.records;
			});
		}

		function mail (univName, adminurl) {
		ProfileService.findProfileForUser($rootScope.curid).then(function(response){

				var abslink = $location.absUrl();
				var ProfileLink = abslink.replace("univs", "profile/");

				var studProfileLink = ProfileLink + $rootScope.curid;

				var recos = response[0].recommendations;

				var mailString = "\nDear " + univName + " admissions office,\n\n" +
				"Please find below the recommendation Letters from" +
				" Academia Inc. for " + $rootScope.firstName + " " + $rootScope.lastName + " from professors.\n" +
				"\nRef: Student's Academia Profile : " + studProfileLink;

				for(var reco in recos){
					var professorProfLink = ProfileLink + recos[reco].authorId ;
					mailString += "\n\nProfessor Name: " + recos[reco].authorName + "\n " +
					 "\nAcademia profile: " + professorProfLink + "\n" +
					" \nRecommendation: \n\n" + recos[reco].content + " \n";
				}

				mailString += "\n\nThanks,\n" + "Academia Inc.";
				console.log("mailString " + mailString);
				var mailObj = {
					"to" : "academiainc90@gmail.com",
					"cc" : $rootScope.curemail,
					"subject" : "Recommendation Letters for " + $rootScope.firstName + " " + $rootScope.lastName,//$rootScope.user.firstName,
					"content" : mailString
				};

				ProfileService.addUnivToAppliedList($rootScope.curid , univName, mailObj).then(function(response){
                				$location.url("/profile/"+$rootScope.curid); //replace by USerId
                			});

			})
		}

	}
}) ();