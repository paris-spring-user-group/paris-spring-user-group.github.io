
define(['vendor/angular/angular'], function(angular) {
    'use strict';

    return angular
        .module('sug-paris-services', ['ngResource'])
        .factory('Phone', ['$resource', function($resource){
            return $resource('phones/:phoneId.json', {}, {
                query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
            });
        }]);
});



