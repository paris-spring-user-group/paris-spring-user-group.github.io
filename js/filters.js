
define(['vendor/angular/angular'], function(angular) {
    'use strict';

    return angular.module('sug-paris-filters', [])
        .filter('capitalizeFirstLetter', function() {
            return function(input) {
                return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
            }
        });
})



