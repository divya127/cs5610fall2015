(function(){
    'use strict';
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService() {

        var forms = [
            {username: "divya12", password: "test123", id: id1 , email: "divya@gmail.com"},
            {username: "admin007", password: "ALX2314", id: id2, email: "admin@gmail.com"}
        ];

        var service = {
            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById
        };
        return service;

        function createFormForUser(userId, form, callback) {
            return users;
        }

        function findAllFormsForUser(userId, callback) {

            return forms;
        }

        function findAllFormsForUser(userId, callback) {

        }

        function updateFormById(formId, newForm, callback) {

        }
    }
})();