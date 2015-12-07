(function() {
    'use strict';
	angular
		.module("AcademiaApp")
		.config(function($routeProvider)
		{
			$routeProvider
				.when("/home",
				{
					templateUrl: "views/home/home.view.html",
					controller: "HeaderController"
				})
				.when("/login",
                {
                    templateUrl: "views/login/login.view.html",
                    controller: "LoginController",
                    controllerAs: "model"
                })
                .when("/header",
                {
                    templateUrl: "views/header/header.view.html",
                    controller: "HeaderController",
                    controllerAs: "model"
                })
                .when("/register",
				{
					templateUrl: "views/register/register.view.html",
					controller: "RegisterController",
					controllerAs: "model"
				})
				.when("/account",
                {
                    templateUrl: "views/account/account.view.html",
                    controller: "AccountController",
                    controllerAs: "model"
                })
				.when("/profile/:userId",
                {
                    templateUrl: "views/profile/profile.view.html",
                    controller: "ProfileController",
                    controllerAs: "model",

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
                .when("/search/:term",
                {
                    templateUrl: "views/search/searchResults.view.html",
                    controller: "SearchController",
                    controllerAs: "model"
                })
                .when("/univs",
                {
                    templateUrl: "views/univs/univs.view.html",
                    controller: "UnivController",
                    controllerAs: "model",
                    resolve    : {
                        loggedin : checkLoggedin
                      }
                })
                .otherwise({
                    redirectTo: "/home"
                })
		});
})();

var checkLoggedin = function($q, $timeout, $http, $location, $rootScope)
{
  var deferred = $q.defer();

  $http.get('/api/project/loggedin').success(function(response)
  {
    if (response !== '0')
    {
      $rootScope.curusername = response.username;
      $rootScope.curpwd = response.password;
      $rootScope.curid = response._id;
      $rootScope.curemail = response.email;
      $rootScope.accountType = response.accountType;
      $rootScope.firstName = response.firstName;
      $rootScope.lastName = response.lastName;
      deferred.resolve();
    }
    else
    {
      $rootScope.errorMessage = 'You need to log in.';
      deferred.reject();
      $location.url('/login');
    }
  });

  return deferred.promise;
};

