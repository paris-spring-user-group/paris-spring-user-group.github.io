
define(['vendor/angular/angular'], function(angular) {
    'use strict';

    return angular.module('sug-paris-filters', [])
        .filter('checkmark', function() {
            return function(input) {
                return input ? '\u2713' : '\u2718';
            };
        }
    );
})



