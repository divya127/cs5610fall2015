var users = require("../models/user.model.js")();

module.exports = function(app) {
    var model = this;
    app.get("/api/assignment/user?username=:username", findUserByUsername);
    app.get("/api/assignment/user?username=:username&password=:password", findUserByUsernameAndPassword);
    app.get("/api/assignment/user", findAllUsers);
    app.get("/api/assignment/user/:id", findUserById);
    app.post("/api/assignment/user", addNewUser);
    app.put("/api/assignment/user/:id", updateUser);
    app.delete("/api/assignment/user/:id", deleteUser);

    model.users = users;

    function findAllUsers(req, res) {
        model
            .findAllUsers()
            .then(function(users){
                res.json(users);
            });
    }

    function findUserByUsername(req, res) {
        var username = req.params.username;
        model
            .findUserByUsername(username)
            .then(function(user){
                res.json(user);
            });
    }

    function findUserByUsernameAndPassword(req, res) {
        var username = req.params.username;
        var pwd = req.params.password;
        var credentials = {
            username: username,
            password: pwd
        };
        model
            .findUserByCredentials(credentials)
            .then(function(user){
                res.json(user);
            });
    }

    function addNewUser(req, res) {
        var page = req.body;
        model
            .addNewUser(user)
            .then(function(users){
                res.json(users);
            });
    }

    function findUserById(){
        var userId = req.params.id;
        model
            .findUserById(userId)
            .then(function(user){
                res.json(user);
            });
    }

    function updateUser() {
    var userId = req.params.id;
    var userObj = req.body;
        model
            .updateUser(userId, userObj)
            .then(function(user){
                res.json(user);
            });
    }

    function deleteUser() {
    var userId = req.params.id;
        model
            .deleteUser(userId)
            .then(function(users){
                res.json(users);
            });
    }

};