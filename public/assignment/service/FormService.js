(function(){
    'use strict';
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService() {

        function uniqueIdForm() {
          function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
          }
          return s4() + s4() + '-' + s4();
        }

        var id1 = uniqueIdForm();
        var id2 = uniqueIdForm();

        var forms = [
            {formId: id1, name: "Registration Form", userid: "ff51fb46-6251-a9ef-79be-7264a076562c"},
            {formId: id2, name: "Todo List", userid: "3b0d054b-d879-1b72-328a-7ad92d25a5b2"}
        ];

        var service = {
            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById
        };
        return service;

        function createFormForUser(userId, form, callback) {
            var id = uniqueId();
            var newForm = {formId: id, name: form.name, userid: userId};
            forms.push(newForm);
            callback(newForm);
        }

        function findAllFormsForUser(userId, callback) {
            var formsForUser = [];
            for(var form in forms) {
                if(forms[form].userid.localeCompare(userId) == 0) {
                    formsForUser.push(forms[form]);
                }
            }
            callback(formsForUser);
        }

        function deleteFormById(formId, callback) {
            for(var form in forms) {
                if(forms[form].formId.localeCompare(formId) == 0) {
                    forms.splice(formId, 1);
                }
            }
           callback(forms);
        }

        function updateFormById(formId, newForm, callback) {
            for(var form in forms) {
               if(forms[form].formId.localeCompare(formId) == 0) {
                    forms[form].username = newForm.username;
                    forms[form].password = newForm.password;
                    forms[form].email = newForm.email;
                    forms[form].firstName = newForm.firstName;
                    forms[form].lastName = newForm.lastName;
                    callback(forms[form]);
                }
            }
            callback(newForm);

        }
    }
})();