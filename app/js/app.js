
define(['vendor/angular/angular',
    'controllers',
    'services',
    'filters'], function(angular) {
    'use strict';

    return angular
        .module('sug-paris', ['sug-paris-controllers', 'sug-paris-services', 'sug-paris-filters']
    );
});