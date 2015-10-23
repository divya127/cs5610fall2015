(function(){
         angular
             .module("FormBuilderApp")
             .controller("RegisterController", RegisterController);

         function RegisterController($scope, UserService, $location, $rootScope) {

             $scope.allUsers = UserService.findAllUsers();

             $scope.register = function($rootScope){
                var user = UserService.createUser($scope.user.username, $scope.user.pwd, $scope.user.email);

                $rootScope.curusername = user.username;
                $rootScope.curpwd = user.password;
                $rootScope.curid = user.id;
                $rootScope.curemail = user.email;

                $scope.$location.url("/profile");
               }

         }
     })();