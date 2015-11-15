(function(){
    'use strict';
         angular
             .module("FormBuilderApp")
             .controller("FieldController", FieldController);

         function FieldController(UserService, FieldService, $routeParams, $rootScope) {
           var model = this;
           var formId = $routeParams.formId;
           var userId = $routeParams.userId;
           model.addField = addField;
           model.removeField = removeField;

           function init() {
           console.log("inside field controller" + $rootScope.curid);
            FieldService.getFieldsForForm(formId)
                       .then(function(fields){
                           model.fields = fields;
                       });
            }
            init();

            function addField() {
                FieldService.createFieldForForm(model.fieldType)
                            .then(function(fields) {
                                model.fields = fields;
                            });
            }

            function removeField(fieldId) {
                FieldService.deleteFieldFromForm(formId, fieldId)
                            .then(function(fields) {
                                model.fields = fields;
                            });
            }

        }
})();