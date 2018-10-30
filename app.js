'use strict';

var missingApp = angular.module('missingApp', []);

missingApp.controller('missing', ['$scope', '$http', function ($scope, $http) {
    $http.get('https://mcscstorage.blob.core.windows.net/tweets/tweets.json').then(function (data) {
        $scope.tweets = data.data;

        angular.forEach(data.data, function (person) {
            // $http.post('https://unkown.com/api/endpoint', { "uri": person.link }).then(function (details) {
            //     person.details = details;
            // });
        });
    });
}]);