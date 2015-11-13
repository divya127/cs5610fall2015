var model = require("../models/form.model.js")();

module.exports = function(app) {
    app.get("/api/assignment/user/:id/form", findAllFormsForUser);
    app.post("/api/assignment/user/:id/form", createNewForm);
    app.put("/api/assignment/form/:id", updateForm);
    app.delete("/api/assignment/form/:id", deleteForm);

    function createNewForm(req, res) {
        console.log("Inside server side addNewUser - forms");
        var form = req.body;
        model
            .createNewForm(form)
            .then(function(users){
                res.json(users);
            });
    }

    function findAllFormsForUser(req, res){
        console.log("Inside server side findUserById - forms");
        var userId = req.params.id;
        model
            .findAllFormsForUser(userId)
            .then(function(user){
                res.json(user);
            });
    }

    function updateForm(req, res) {
    console.log("Inside server side updateUser - forms");
    var formId = req.params.id;
    var formObj = req.body;
        model
            .updateForm(formId, formObj)
            .then(function(user){
                res.json(user);
            });
    }

    function deleteForm(req, res) {
    console.log("Inside server side deleteUser - forms");
    var formId = req.params.id;
        model
            .deleteForm(formId)
            .then(function(users){
                res.json(users);
            });
    }

};