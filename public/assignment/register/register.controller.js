(function(){
         angular
             .module("FormBuilderApp")
             .controller("RegisterController", RegisterController);

         function RegisterController($scope, UserService, $location) {

             $scope.allUsers = UserService.findAllUsers();

             $scope.register = function(){
                                var newUser = UserService.createUser($scope.user.username, $scope.user.pwd, $scope.user.email);
                                $scope.user.username = newUser.username;
                                $scope.user.pwd = newUser.pwd;
                                $scope.user.email = newUser.email;
                                $scope.$location.url("/profile");
                               }

         }
     })();