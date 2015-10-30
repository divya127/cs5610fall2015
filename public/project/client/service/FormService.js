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
            {formId: id1, formname: "Registration Form", userid: "123"},
            {formId: id2, formname: "Todo List", userid: "456"}
        ];

        var service = {
            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById
        };
        return service;

        function createFormForUser(userId, form, callback) {
            var id = uniqueIdForm();
            form.formId = id;
            forms.push(form);
            callback(form);
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

        function deleteFormById(formId, userId, callback) {
            var formsForUser = [];
            for(var formd in forms) {
                if(forms[formd].formId.localeCompare(formId) == 0 ) {
                    forms.splice(formd, 1);
                }
            }

            for(var form in forms) {
                if(forms[form].userid.localeCompare(userId) == 0) {
                    formsForUser.push(forms[form]);
                }
            }
           callback(formsForUser);
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