(function(){
    'use strict';
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService($http, $q) {

    var api = {
        createFormForUser: createFormForUser,
        findAllFormsForUser: findAllFormsForUser,
        deleteFormById: deleteFormById,
        updateFormById: updateFormById
    };
        return api;

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

        function createFormForUser(userId, form) {
            var deferred = $q.defer();

            $http.post("/api/assignment/user/" + userId + "/form", form)
                .success(function(forms){
                    deferred.resolve(forms);
                });

            return deferred.promise;
//
//            var id = uniqueIdForm();
//            form.formId = id;
//            forms.push(form);
        }

        function findAllFormsForUser(userId) {
            var deferred = $q.defer();
            $http.get("/api/assignment/user/" + userId + "/form")
                .success(function(forms){
                    deferred.resolve(forms);
                });

            return deferred.promise;


//            var formsForUser = [];
//            for(var form in forms) {
//                if(forms[form].userid.localeCompare(userId) == 0) {
//                    formsForUser.push(forms[form]);
//                }
//            }
        }

        function deleteFormById(formId, userId) {
            var deferred = $q.defer();
            $http.delete("/api/assignment/form/"+ formId)
                .success(function(forms){
                    deferred.resolve(forms);
                });

            return deferred.promise;


//            var formsForUser = [];
//            for(var formd in forms) {
//                if(forms[formd].formId.localeCompare(formId) == 0 ) {
//                    forms.splice(formd, 1);
//                }
//            }
//
//            for(var form in forms) {
//                if(forms[form].userid.localeCompare(userId) == 0) {
//                    formsForUser.push(forms[form]);
//                }
//            }
        }

        function updateFormById(formId, newForm) {
            var deferred = $q.defer();

            $http.post("/api/assignment/form/" + formId)
                .success(function(form){
                    deferred.resolve(form);
                });

            return deferred.promise;


//            for(var form in forms) {
//               if(forms[form].formId.localeCompare(formId) == 0) {
//                    forms[form].username = newForm.username;
//                    forms[form].password = newForm.password;
//                    forms[form].email = newForm.email;
//                    forms[form].firstName = newForm.firstName;
//                    forms[form].lastName = newForm.lastName;
//                    callback(forms[form]);
//                }
//            }
        }
    }
})();