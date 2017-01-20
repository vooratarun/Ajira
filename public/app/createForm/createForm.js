'use strict';

angular.module('createForm', [])

.controller('createFormController', ["$http","$scope","$document","$window",
        function($http,$scope,$document,$window) {

        $scope.baseUrl= "http://localhost:3000";
        $scope.formName = "";
        $scope.radiobtn = "red";
        $scope.formDescription = "";
        $scope.elements = [
            //{
            //    "fieldType" : "textBox",
            //    "displayName" : "",
            //    "hintText" : ""
            //},
            //{
            //    "fieldType" : "textBox",
            //    "displayName" : "",
            //    "hintText" : ""
            //},
            //{
            //    "fieldType" : "textBox",
            //    "displayName" : "",
            //    "hintText" : ""
            //},
            //{
            //    "fieldType" : "radioGroup",
            //    "displayName" : "",
            //    "valueList" : ""
            //},
            //{
            //    "fieldType" : "checkBox",
            //    "displayName" : "",
            //    "valueList" : "",
            //}

        ];
        $scope.onTextBoxClick = function(){
            var url = $scope.baseUrl+"/create/textBox";
            $http.get(url).then(function(response){
               $scope.elements.push(response["data"])
            });

        };

        $scope.onRadioGroupClick = function(){
            var url = $scope.baseUrl+"/create/radioGroup";
            $http.get(url).then(function(response){
                $scope.elements.push(response["data"])
            });

        };

        $scope.onCheckGroupClick = function(){
            var url = $scope.baseUrl+"/create/checkGroup";
            $http.get(url).then(function(response){
                $scope.elements.push(response["data"])
            });

        };

        $scope.onSubmit = function(){
            var form = {};
            form["formName"] = $scope.formName;
            form["formDescription"] = $scope.formDescription;
            form["formFields"] = [];

            for(var i=0;i<$scope.elements.length;i++){
                var element = $scope.elements[i];
                if(element["fieldType"] == "textBox"){
                    form["formFields"].push(element);
                } else if(element["fieldType"] == "checkGroup") {
                    element["valueList"] = element["valueList"].split(',');
                    form["formFields"].push(element);
                } else if(element["fieldType"] == "radioGroup") {
                    element["valueList"] = element["valueList"].split(',');
                    form["formFields"].push(element);
                }
            }
            console.log(angular.toJson(form));

            var url = $scope.baseUrl+"/create/form";
            $http({
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                method : "POST",
                url : url,
                data : { "form" : form }
            }).then(
                function(resp){
                    alert(resp["data"]);
                    $window.location.reload();
                },function(err){
                    console.log(err);
                })

        };

}])

.directive('checklist',function(){

    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = 'templates/options.html';
    directive.scope = {
        display : "=",
        list : "=",
        output : "="
    };
    directive.link =  function(scope, element, attrs) {
        //  scope.selectedValue = 1234;
    };
    directive.controller = function($scope){
        $scope.onOptionClick = function(x){

            var found = false;
            for(var i=0;i<$scope.output.length;i++){
                if(x == $scope.output[i]){
                    $scope.output.splice(i,1);
                    found = true;
                    break;
                }
            }
            if(!found){
                $scope.output.push(x);
            }
        }
    };
    return directive;
})


.directive('textbox',function(){

    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = 'templates/textBox.html';
    directive.scope = {
       obj : "="
    };
    directive.link =  function(scope, element, attrs) {
        //  scope.selectedValue = 1234;
    };
    directive.controller = function($scope){

    };
    return directive;
})

.directive('checkbox',function(){

    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = 'templates/checkList.html';
    directive.scope = {
        obj : "="
    };
    directive.link =  function(scope, element, attrs) {
        //  scope.selectedValue = 1234;
    };
    directive.controller = function($scope){

    };
    return directive;
})

.directive('radiogroup',function(){

        var directive = {};
        directive.restrict = 'E';
        directive.templateUrl = 'templates/radioGroup.html';
        directive.scope = {
            obj : "="
        };
        directive.link =  function(scope, element, attrs) {
            //  scope.selectedValue = 1234;
        };
        directive.controller = function($scope){

        };
        return directive;
    })
;
