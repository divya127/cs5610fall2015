(function(){
    'use strict';
         angular
             .module("AcademiaApp")
             .controller("RegisterController", RegisterController);

         function RegisterController($scope, UserService, $location, $rootScope, ProfileService) {
                var model = this;
                model.register = register;
                model.validateFields = validateFields;

             function init() {
                         ProfileService.getLoggedIn()
                         .then(function(response){
                             if (response !== '0'){
                                 $location.url('/account');
                             }
                         });
                     }
                      init();

             function getAllUsers(response) {
                if(response != null) {
                    model.allUsers = response;
                }
             }

             function validateFields() {
                if(model.user.pwd != model.user.verifypwd) {
                    alert("Passwords do not match!!");
                } else {
                    register();
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
                    accountType : model.user.accountType,
                    firstName : model.user.firstName,
                    lastName : model.user.lastName,
                    phone : model.user.phone,
                    schoolName : model.user.schoolName,
                    tagLine : model.user.tagLine,
                    linkedinId : model.user.linkedIn,
                    facebookId : model.user.facebook,
                    githubId : model.user.github
                };
                console.log("Inside register!");
                var user = UserService.createUser(userObj)
                .then(function(res){

                    UserService.findUserByUsernameAndPassword(res.username, res.password)
                    .then(function(response){
                    console.log("New user " + response + " id: " + response[0]._id);
                    if(response != null) {
                        $rootScope.curusername = response[0].username;
                        $rootScope.curpwd = response[0].password;
                        $rootScope.curid = response[0]._id;
                        $rootScope.curemail = response[0].email;
                        $rootScope.accountType = response[0].accountType;
                        $rootScope.firstName = response[0].firstName;
                        $rootScope.lastName = response[0].lastName;

                        var profObj= {
                            "userId" : response[0]._id,
                        };
                        ProfileService.addNewProfile(profObj)
                        .then(function(result){
                            ("Redirecting to profile page : " + response[0]._id);
                            $location.url("/profile/"+response[0]._id);
                        });
                    }

                    });
                });
            }
         }
    })();