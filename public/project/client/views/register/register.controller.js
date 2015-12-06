(function(){
    'use strict';
         angular
             .module("AcademiaApp")
             .controller("RegisterController", RegisterController);

         function RegisterController($scope, UserService, $location, $rootScope, ProfileService) {
                var model = this;
                model.register = register;

             UserService.findAllUsers(getAllUsers);

             function getAllUsers(response) {
                if(response != null) {
                    model.allUsers = response;
                }
             }

             function register() {
                var username = model.user.username;
                var pwd = model.user.pwd;
                var email = model.user.email;
                var userObj = {
                    username: username,
                    password: pwd ,
                    email: email,
                    accountType : model.user.accountType
                };
                console.log("Inside register!");
                var user = UserService.createUser(userObj)
                .then(function(response){
                console.log("New user " + response + " id: " + response._id);
                    if(response != null) {
                        $rootScope.curusername = response.username;
                        $rootScope.curpwd = response.password;
                        $rootScope.curid = response._id;
                        $rootScope.curemail = response.email;
                        $rootScope.curAccType = response.accountType;

                        var profObj= {
                            "userId" : response._id,
                            "schoolName" : model.user.schoolName,
                            "tagLine" : model.user.tagLine
                        };
                        ProfileService.addNewProfile(profObj)
                        .then(function(res){

                            $location.url("/profile/"+response._id);
                        });
                    }
                });
             }
         }
    })();