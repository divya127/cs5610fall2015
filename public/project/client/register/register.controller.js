(function(){
    'use strict';
         angular
             .module("AcademiaApp")
             .controller("RegisterController", RegisterController);

         function RegisterController($scope, UserService, $location, $rootScope) {

             UserService.findAllUsers(getAllUsers);

             function getAllUsers(response) {
                if(response != null) {
                    $scope.allUsers = response;
                }
             }

             $scope.register = function($rootScope){
                var username = $scope.user.userName;
                var pwd = $scope.user.pwd;
                var email = $scope.user.email;
                var userObj = {username: username, password: pwd , email: email};
                var user = UserService.createUser(userObj, callback);
             }

             function callback(response){
                if(response != null) {
                    $rootScope.curusername = response.username;
                    $rootScope.curpwd = response.password;
                    $rootScope.curid = response.id;
                    $rootScope.curemail = response.email;
                    $scope.$location.url("/profile");
                }
             }
         }
    })();