(function(){
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService() {
        var id1 = Guid.create();
        var id2 = Guid.create();
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