/**
 * Created by admin on 19-Jan-17.
 */


angular.module('showForms', [])

.controller("showFormController",["$scope","$http",
        function($scope,$http){

        $scope.baseUrl= "http://127.0.0.1:3000";
        $scope.forms = [];

        $scope.getForms = function() {
                var url = $scope.baseUrl +"/show/forms";
                console.log("getting all forms");
                $http.get(url).then(function(response){
                        $scope.forms = response["data"];
                })

        };
        $scope.getForms();

}]);
