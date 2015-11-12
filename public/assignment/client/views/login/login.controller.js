(function(){
    'use strict';
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController(UserService, $rootScope, $location) {
        var model = this;
        model.login = login;

        function login() {
            var username = model.user.username;
            var pwd = model.user.pwd;
            UserService.findUserByUsernameAndPassword(username, pwd)
                        .then(function(user){
                            if (user != null) {
                                $rootScope.curusername = user.username;
                                $rootScope.curpwd = user.password;
                                $rootScope.curid = user.id;
                                $rootScope.curemail = user.email;
                                $rootScope.firstname = user.firstName;
                                $rootScope.lastname = user.lastName;
                                model.$location.url("/profile");
                                }
                            }
                        )};
       // }

//    function finduser(response){
//        if (response != null) {
//            $rootScope.curusername = response.username;
//            $rootScope.curpwd = response.password;
//            $rootScope.curid = response.id;
//            $rootScope.curemail = response.email;
//            $rootScope.firstname = response.firstName;
//            $rootScope.lastname = response.lastName;
//            $scope.$location.url("/profile");
//            }
//        }
    }
})();