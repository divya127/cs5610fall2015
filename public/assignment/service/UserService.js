(function(){
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService() {

        function uniqueId() {
          function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
          }
          return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
        }

        var id1 = uniqueId();
        var id2 = uniqueId();
        var allUsers = [
            {username: "divya127", password: "test123", id: id1 , email: "divya@gmail.com", firstName: "Divya", lastName: "Anush"},
            {username: "admin", password: "admin", id: id2, email: "admin@gmail.com", firstName: "admin", lastName: "admin"}
        ];

        var service = {
            findAllUsers: findAllUsers,
            findUserByUsernameAndPassword: findUserByUsernameAndPassword,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser
        };
        return service;

        function createUser(username, password, email, callback) {
            var id = uniqueId();
            var newUser = {username: username, password: password, id: id , email: email};
            allUsers.push(newUser);
            callback(newUser);
        }

        function findAllUsers(callback) {
            callback(allUsers);
        }

        function findUserByUsernameAndPassword(username, password, callback) {
            for(var i = 0; i < allUsers.length; i++) {
                    var user = allUsers[i];
                    var attrUserName = user[username];
                    var attrPwd = user[password];
                    if(attrUserName == username && attrPwd == password) {
                        callback(user);
                    }
                }
            callback(null);
        }

        function deleteUserById(userId, callback) {
            for(var i = 0; i < allUsers.length; i++) {
                var user = allUsers[i];
                var attrId = user[id];
                if(attrId == userId) {
                    allUsers.splice(userId, 1);
                }
            }
            callback(allUsers);
        }

        function updateUser(userId, userObj, callback) {
            for(var i = 0; i < allUsers.length; i++) {
                var user = allUsers[i];
                var attrId = user[id];
                if(attrId == userId) {
                    user[username] = userObj.username;
                    user[password] = userObj.password;
                    user[email] = userObj.email;
                    user[firstName] = userObj.firstName;
                    user[lastName] = userObj.lastName;
                    callback(user);
                }
            }
            callback(userObj);
        }
    }
})();