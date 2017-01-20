'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'checklist-model',
  'createForm',
  'showForms',
  'singleForm'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
      .when("/createForm",{
        templateUrl : "createForm/createForm.html",
        controller : "createFormController"
      })
      .when("/showForms",{
          templateUrl : "showForms/showForms.html",
          controller : "showFormController"
      })
      .when("/singleForm/:id",{
          templateUrl : "singleForm/singleform.html",
          controller : "singleFormController"
      })
      .otherwise({
          templateUrl : "forms/forms.html",
          controller : "formCtrl"
      });
}]);
