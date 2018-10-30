'use strict';

var missingApp = angular.module('missingApp', []);

missingApp.controller('missing', ['$scope', '$http', function ($scope, $http) {
    $http.get('/data.js').then(function (data) {
        $scope.peoples = data.peoples;
        angular.forEach($scope.peoples, function (person) {
            console.log(person.name);
        };
    });
}]);