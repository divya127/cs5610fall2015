var users = require("../models/form.model.js")();

module.exports = function(app) {
    app.get("/api/assignment/user", getAllUsers);

    $scope.users = {};
    function getAllUsers(req, res) {
        .success(function(response){
            $scope.users = response;
        });
    }

    $scope.addUser = function(user) {
        $http.post("/api/assignment/course", user)
            .success(function(response){
                $scope.users = response;
            });
    }

    $scope.selectUser = function() {
        var index = $scope.users.indexOf($scope.selectedUser);
        $http.get("/api/assignment/user/"+index)
            .success(function(response){
                $scope.fetchedUser = response;
            });
    }

    $scope.updateUser = function(user) {
    var index = $scope.users.indexOf($scope.selectedUser);
        $http.put("/api/assignment/user"+index, user)
            .success(function(response){
                $scope.users = response;
            });
    }

    $scope.deleteUser = function(user) {
    var index = $scope.users.indexOf($scope.selectedUser);
        $http.delete("/api/assignment/user"+index)
            .success(function(response){
                $scope.users = response;
            });
    }

};