(function(){
         angular
             .module("FormBuilderApp")
             .controller("RegisterController", RegisterController);

         function RegisterController($scope, UserService) {

             $rootScope = UserService.findUserByUsernameAndPassword();

             $scope.login = function(index) {
                 console.log(index);
                 $scope.courses.splice(index, 1);
             }
         }
     })();