
define(['vendor/angular/angular'], function(angular) {
    'use strict';

    return angular
        .module('sug-paris-controllers', [])
        .controller('HomeController', [
            '$scope', function($scope) {
                $scope.hello = 'world';
            }
        ]);
});