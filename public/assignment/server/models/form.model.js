var forms = require('../models/form.mock.json');
var q = require("q");
var uuid = require('node-uuid');

module.exports = function(app) {

    var api = {
        findFormByTitle : findFormByTitle,
        findAllForms: findAllForms,
        findFormById : findFormById,
        findAllFormsForUser : findAllFormsForUser,
        createNewForm : createNewForm,
        updateForm : updateForm,
        deleteForm : deleteForm,
        createNewFieldForFormId : createNewFieldForFormId,
        updateFieldForFormId : updateFieldForFormId,
        deleteFieldByFormIdAndFieldId : deleteFieldByFormIdAndFieldId,
        findFieldByFormIdAndFieldId : findFieldByFormIdAndFieldId,
        findAllFieldsForFormId: findAllFieldsForFormId
    };
    return api;

    function findAllFormsForUser(userId) {
    console.log("inside form.model.js findAllFormsForUser");
        var deferred = q.defer();
        var userForms = [] ;
        for(var form in forms) {
            if(forms[form].userId == userId) {
                userForms.push(forms[form]);
            }
        }
        deferred.resolve(userForms);
        return deferred.promise;
    }

    function deleteForm(formId) {
    console.log("inside form.model.js deleteForm");
        var deferred = q.defer();
        var userForms = [];
        var userId  = "0";
        console.log("starting for loop");
        for(var form in forms) {
        console.log(formId + " " + forms[form].id);
            if(forms[form].id.localeCompare(formId) == 0) {
            console.log(formId + " " + forms[form].userId);
                userId = forms[form].userId;
                forms.splice(form, 1);
                break;
            }
        }
        for(var form in forms) {
            if(forms[form].userId == userId) {
                userForms.push(forms[form]);
            }
        }
        deferred.resolve(userForms);
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
            if(forms[form].id.localeCompare(formId) == 0) {
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

    function findFormById(formId) {
    var deferred = q.defer();
        for(var form in forms) {
            if(forms[form].id.localeCompare(formId) == 0) {
                console.log("Found form!");
                deferred.resolve(forms[form]);
            }
        }
        return deferred.promise;
    }

    function findAllForms() {
        var deferred = q.defer();
        deferred.resolve(forms);
        return deferred.promise;
    }


};

