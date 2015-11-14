(function(){
    'use strict';
         angular
             .module("FormBuilderApp")
             .controller("FormController", FormController);

         function FormController(UserService, $rootScope, FormService) {

            var model = this;
            model.addForm = addForm;
            model.updateForm = updateForm;
            model.deleteForm = deleteForm;
            model.selectForm = selectForm;

            function init() {
            console.log("insdie form controller" + $rootScope.curid);
             FormService.findAllFormsForUser($rootScope.curid)
                        .then(function(forms){
                            model.forms = forms;
                        });
             }
             init();

             function addForm() {
                var formObj = { userId: $rootScope.curid, title: model.title};
                FormService.createFormForUser($rootScope.curid, formObj)
                           .then(function(form){
                             model.currentform = form;
                             model.forms.push(model.currentform);
                            });
             }

             function updateForm() {
                 FormService.updateFormById(model.currentform.formId, newForm)
                            .then(function(form){
                                model.currentform = form;
                            });
             }


             function deleteForm(formId) {
                 FormService.deleteFormById(formId)
                            .then(function(forms){
                            console.log(forms);
                                model.forms = forms;
                            });
             }

        //TODO - Rewrite the select form function
             function selectForm(index) {
                  model.currentForm = model.forms[index];
             }
             function selectForm(response) {
                  if(response != null) {
                      model.currentform = response;
                  }
             }

         }
     })();