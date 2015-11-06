(function() {
    'use strict';
	angular
		.module("AcademiaApp")
		.config(function($routeProvider)
		{
			$routeProvider
				.when("/home",
				{
					templateUrl: "home/home.view.html"
				})
				.when("/login",
                {
                    templateUrl: "login/login.view.html",
                    controller: "LoginController"
                })
                .when("/register",
				{
					templateUrl: "register/register.view.html",
					controller: "RegisterController"
				})
				.when("/profile",
                {
                    templateUrl: "profile/profile.view.html",
                    controller: "ProfileController"
                })
                .when("/clubs",
                {
                    templateUrl: "profile/club.view.html",
                    controller: "ProfileController"
                })
                .when("/skills",
                {
                    templateUrl: "profile/skills.view.html",
                    controller: "ProfileController"
                })
                .when("/recommendations",
                {
                    templateUrl: "profile/recommendations.view.html",
                    controller: "ProfileController"
                })
                .when("/testscores",
                {
                    templateUrl: "profile/testscores.view.html",
                    controller: "ProfileController"
                })
                .when("/projects",
                {
                    templateUrl: "profile/projects.view.html",
                    controller: "ProfileController"
                })
                .when("/professor",
                {
                    templateUrl: "professor/professor.view.html",
                    controller: "ProfessorController"
                })
                .when("/student",
                {
                    templateUrl: "student/student.view.html",
                    controller: "StudentController"
                })
                .otherwise({
                    redirectTo: "/home"
                })
		});
})();