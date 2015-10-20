(function(){
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService() {

        function guid() {
          function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
          }
          return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
        }

        var id1 = guid();
        var id2 = guid();
        var users = [
            {username: "divya12", password: "test123", id: id1 , email: "divya@gmail.com"},
            {username: "admin007", password: "ALX2314", id: id2, email: "admin@gmail.com"}
        ];

        var service = {
            findAllUsers: findAllUsers,
            findUserByUsernameAndPassword: findUserByUsernameAndPassword,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser
        };
        return service;

        function findAllUsers() {
            return users;
        }

        function findAllUsers() {
            return users;
        }
    }
})();