var forms = require('../models/form.mock.json');
var q = require("q");

module.exports = function(app) {

    var api = {
        findFormByTitle : findFormByTitle,
        findAllFormsForUser : findAllFormsForUser,
        createNewForm : createNewForm,
        updateForm : updateForm,
        deleteForm : deleteForm
    };
    return api;

    function findAllFormsForUser(userId) {
    console.log("inside form.model.js findAllFormsForUser");
        var deferred = q.defer();
        for(var form in forms) {
            if(forms[form].userId == userId) {
                deferred.resolve(forms[form ]);
            }
        }
        return deferred.promise;
    }

    function deleteForm(formId) {
    console.log("inside form.model.js deleteForm");
        var deferred = q.defer();
        for(var form in forms) {
            if(forms[form].id == formId) {
                forms.splice(form, 1);
                deferred.resolve(forms);
            }
        }
        return deferred.promise;
    }

    function createNewForm(newForm) {
    console.log("inside form.model.js createNewForm");
        var deferred = q.defer();
        console.log(newForm);
        forms.push(newForm);
        deferred.resolve(newForm);
        return deferred.promise;
    }

    function updateForm(formId, formObj) {
    console.log("inside form.model.js updateForm");
        var deferred = q.defer();
        for(var i = 0; i < forms.length; i++)  {
        console.log(forms[i].id);
            if(forms[i].id == formId) {
                forms[i].username = formObj.username;
                forms[i].password = formObj.password;
                forms[i].firstName = formObj.firstName;
                forms[i].lastName = formObj.lastName;
                deferred.resolve(forms[i]);
            }
        }
        return deferred.promise;
    }

    function findFormByTitle(title) {
    var deferred = q.defer();
        for(var form in forms) {
            if(forms[form].title.localeCompare(title) == 0) {
                console.log("Found form!");
                deferred.resolve(forms[form]);
            }
        }
        return deferred.promise;
    }


};

