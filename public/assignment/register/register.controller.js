(function(){
         angular
             .module("FormBuilderApp")
             .controller("RegisterController", RegisterController);

         function RegisterController($scope, UserService, $location) {

             $scope.allUsers = UserService.findAllUsers();


             var username = $scope.userName;
             var password = $scope.pwd;
             var email = $scope.email;
             alert(email);

             $scope.register = UserService.createUser(username, password, email);
             $scope$location.url("/profile")
         }
     })();