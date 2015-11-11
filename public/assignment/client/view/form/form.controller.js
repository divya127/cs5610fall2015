(function(){
    'use strict';
         angular
             .module("FormBuilderApp")
             .controller("FormController", FormController);

         function FormController($scope, UserService, $location, $rootScope, FormService) {

             FormService.findAllFormsForUser($rootScope.curid, getallForms);
             function getallForms(response) {
                if(response != null) {
                    $scope.forms = response;
                }
             }

             $scope.addForm = function() {
                var formObj = { userid: $rootScope.curid, formname: $scope.formname};
                FormService.createFormForUser($rootScope.curid, formObj, createForm);
             }

             function createForm(response) {
                if(response != null) {
                    $scope.currentform = response;
                    $scope.forms.push($scope.currentform);
                }
             }

             $scope.updateForm = function() {
                FormService.updateFormById($scope.currentform.formId, newForm, updateForm);
             }
             function updateForm(response) {
                 if(response != null) {
                     $scope.currentform = response;
                 }
             }

             $scope.deleteForm = function(index) {
                var currentForm = $scope.forms[index];
                 FormService.deleteFormById(currentForm.formId, $rootScope.curid, deleteForm);
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
                      $scope.currentform = response;
                  }
             }

         }
     })();