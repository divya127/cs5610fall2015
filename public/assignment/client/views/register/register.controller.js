(function(){
    'use strict';
         angular
             .module("FormBuilderApp")
             .controller("RegisterController", RegisterController);

         function RegisterController(UserService, $location, $rootScope) {
            var model = this;
            model.getAllUsers = getAllUsers;
            model.register = register;

            function init() {
             UserService.findAllUsers(getAllUsers)
                        .then(function(users){
                            model.allUsers = users;
                        });
            }
            init();

             function register($rootScope){
                var username = model.user.userName;
                var pwd = model.user.pwd;
                var email = model.user.email;
                var userObj = {username: username, password: pwd , email: email};
                var user = UserService.createUser(userObj)
                                      .then(function(user){
                                        if(response != null) {
                                            $rootScope.curusername = user.username;
                                            $rootScope.curpwd = user.password;
                                            $rootScope.curid = user.id;
                                            $rootScope.curemail = user.email;
                                            model.$location.url("/profile");
                                        }
                                      });
             }
         }
    })();