/**
 * Created by admin on 19-Jan-17.
 */

angular.module('singleForm', [])

.controller("singleFormController",["$scope","$http",
        "$routeParams",
        function($scope,$http,$routeParams){

        $scope.baseUrl = "http://localhost:3000";
        $scope.formData = "";
        $scope.radio = "text";
        $scope.list = ["red","green","yellow"];
        $scope.checkboxObject = { };

        $scope.roles = [
            'guest',
            'user',
            'customer',
            'admin'
        ];

        $scope.user = {
            roles: ['user']
        };


        $scope.showForm = function(){
            var url = $scope.baseUrl +"/show/forms/"+$routeParams.id;
            $http.get(url).then(function(response){
                console.log(response["data"]);
                $scope.formData = response["data"];

            },function(err){

            })
        };

        $scope.showForm();
}]);