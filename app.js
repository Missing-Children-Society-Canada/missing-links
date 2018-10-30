'use strict';

var missingApp = angular.module('missingApp', []);

missingApp.controller('missing', ['$scope', '$http', function ($scope, $http) {
    $http.get('/data.js').then(function (data) {
        $scope.peoples = data.raw;
    });
}]);