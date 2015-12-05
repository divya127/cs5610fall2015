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
                    controller: "LoginController",
                    controllerAs: "model"
                })
                .when("/register",
				{
					templateUrl: "views/register/register.view.html",
					controller: "RegisterController",
					controllerAs: "model"
				})
				.when("/profile/:userId",
                {
                    templateUrl: "views/profile/profile.view.html",
                    controller: "ProfileController",
                    controllerAs: "model"
                })
                .when("/professor",
                {
                    templateUrl: "views/professor/professor.view.html",
                    controller: "ProfessorController",
                    controllerAs: "model"
                })
                .when("/student",
                {
                    templateUrl: "views/student/student.view.html",
                    controller: "StudentController",
                    controllerAs: "model"
                })
                .when("/search",
                {
                    templateUrl: "views/search/searchResults.view.html",
                    controller: "SearchController",
                    controllerAs: "model"
                })
                .when("/univs",
                {
                    templateUrl: "views/univs/univs.view.html",
                    controller: "UnivController",
                    controllerAs: "model"
                })
                .otherwise({
                    redirectTo: "/home"
                })
		});
})();