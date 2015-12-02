(function() {
    'use strict';
	angular
		.module("AcademiaApp")
		.config(function($routeProvider)
		{
			$routeProvider
				.when("/home",
				{
					templateUrl: "views/home/home.view.html"
				})
				.when("/login",
                {
                    templateUrl: "views/login/login.view.html",
                    controller: "LoginController"
                })
                .when("/register",
				{
					templateUrl: "views/register/register.view.html",
					controller: "RegisterController"
				})
				.when("/profile",
                {
                    templateUrl: "views/profile/profile.view.html",
                    controller: "ProfileController"
                })
                .when("/clubs",
                {
                    templateUrl: "views/profile/club.view.html",
                    controller: "ProfileController"
                })
                .when("/skills",
                {
                    templateUrl: "views/profile/skills.view.html",
                    controller: "ProfileController"
                })
                .when("/recommendations",
                {
                    templateUrl: "views/profile/recommendations.view.html",
                    controller: "ProfileController"
                })
                .when("/testscores",
                {
                    templateUrl: "views/profile/testscores.view.html",
                    controller: "ProfileController"
                })
                .when("/projects",
                {
                    templateUrl: "views/profile/projects.view.html",
                    controller: "ProfileController"
                })
                .when("/professor",
                {
                    templateUrl: "views/professor/professor.view.html",
                    controller: "ProfessorController"
                })
                .when("/student",
                {
                    templateUrl: "views/student/student.view.html",
                    controller: "StudentController"
                })
                .when("/search",
                {
                    templateUrl: "views/search/searchResults.view.html",
                    controller: "SearchController"
                })
                .when("/univs",
                {
                    templateUrl: "views/univs/univs.view.html",
                    controller: "UnivController"
                })
                .otherwise({
                    redirectTo: "/home"
                })
		});
})();