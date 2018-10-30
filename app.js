'use strict';

var missingApp = angular.module('missingApp', []);

missingApp.controller('missing', ['$scope', '$http', function ($scope, $http) {
    $http.get('https://mcscstorage.blob.core.windows.net/tweets/tweets.json').then(function (data) {
        $scope.peoples = data.data.peoples;

        angular.forEach($scope.peoples, function (person) {
            // $http.post('https://unkown.com/api/endpoint', { "uri": person.link }).then(function (details) {
            //     person.details = details;
            // });
        });
    });
}]);