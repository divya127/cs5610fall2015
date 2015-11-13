(function(){
    'use strict';
         angular
             .module("FormBuilderApp")
             .controller("FieldController", FieldController);

         function FieldController(UserService, FieldService, $routeParams) {
           var id = $routeParams.formId;
           console.log(id);


        }
})();