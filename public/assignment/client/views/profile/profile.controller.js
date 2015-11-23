(function(){
    'use strict';
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController(UserService, $rootScope) {
        var model = this;
        model.update = update;

        model.username = $rootScope.curusername;
        model.pwd = $rootScope.curpwd;
        model.email = $rootScope.curemail;
        model.firstname = $rootScope.firstname;
        model.lastname = $rootScope.lastname;

        function update(){
            var userobj = {username: model.username, password: model.pwd, id: $rootScope.curid,
            email: model.email, firstName: model.firstname, lastName: model.lastname};

            UserService.updateUser($rootScope.curid, userobj)
                        .then(function(user){
                            if(user != null) {
                                console.log("Updated user info: " + user[0].username);
                                $rootScope.curusername = user[0].username;
                                $rootScope.curpwd = user[0].password;
                                $rootScope.curid = user[0].id;
                                $rootScope.curemail = user[0].email;
                                $rootScope.firstname = user[0].firstName;
                                $rootScope.lastname = user[0].lastName;
                            }
                        });
        }
    }
})();