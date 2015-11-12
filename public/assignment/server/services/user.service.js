var users = require("../models/form.model.js")();

module.exports = function(app) {
    var model = this;
    app.get("/api/assignment/user", getAllUsers);

    model.users = {};
    function getAllUsers(req, res) {
    $http.get("/api/assignment/user/")
        .success(function(response){
            model.users = response;
        });
    }

    model.addUser = function(user) {
        $http.post("/api/assignment/course", user)
            .success(function(response){
                model.users = response;
            });
    }

    model.selectUser = function() {
        var index = $scope.users.indexOf($scope.selectedUser);
        $http.get("/api/assignment/user/"+index)
            .success(function(response){
                model.fetchedUser = response;
            });
    }

    model.updateUser = function(user) {
    var index = $scope.users.indexOf($scope.selectedUser);
        $http.put("/api/assignment/user"+index, user)
            .success(function(response){
                model.users = response;
            });
    }

    model.deleteUser = function(user) {
    var index = $scope.users.indexOf($scope.selectedUser);
        $http.delete("/api/assignment/user"+index)
            .success(function(response){
                model.users = response;
            });
    }

};