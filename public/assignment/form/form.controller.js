(function(){
    'use strict';
         angular
             .module("FormBuilderApp")
             .controller("FormController", FormController);

         function RegisterController($scope, UserService, $location, $rootScope, FormService) {

             FormService.findAllFormsForUser(userId, getallForms);
             function getallForms(response) {
                if(response != null) {
                    $scope.forms = response;
                }
             }

             $scope.addForm = function() {
                var formObj = { };
                FormService.createFormForUser($rootScope.curid, formObj, createForm);
             }
             function createForm(response) {
                if(response != null) {
                    $scope.forms = response;
                }
             }

             $scope.updateForm = function() {
                FormService.updateFormById(formId, newForm, updateForm);
             }
             function updateForm(response) {
                 if(response != null) {
                     $scope.forms = response;
                 }
             }

             $scope.deleteForm = function(index) {
                var currentForm = $scope.forms[index];
                 FormService.deleteFormById(currentForm.id, deleteForm);
             }
             function deleteForm(response) {
                  if(response != null) {
                      $scope.forms = response;
                  }
             }

             $scope.selectForm = function(index) {
                  $scope.currentForm = $scope.forms[index];
             }
             function selectForm(response) {
                  if(response != null) {
                      $scope.forms = response;
                  }
             }

         }
     })();