(function(){
    'use strict';
         angular
             .module("FormBuilderApp")
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
                var user = UserService.createUser(username, pwd, email, callback);
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