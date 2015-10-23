(function(){
         angular
             .module("FormBuilderApp")
             .controller("RegisterController", RegisterController);

         function RegisterController($scope, UserService, $location, $rootScope) {

             $scope.allUsers = UserService.findAllUsers();
             $rootScope.user = { };


             $scope.register = function($rootScope){
                $rootScope.user = UserService.createUser($scope.user.username, $scope.user.pwd, $scope.user.email);
                $scope.$location.url("/profile");
               }

         }
     })();