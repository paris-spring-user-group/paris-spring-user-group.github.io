'use strict';

var springMeetupParisApp = angular.module('springMeetupParisApp', [ 'ui.bootstrap', 'boSmpController' ]);
//'eventbriteController'

springMeetupParisApp.config(function($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;

    //Remove the header used to identify ajax call  that would prevent CORS from working
//    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

var boSmpController = angular.module('boSmpController', []);

boSmpController.controller('ListEventsCtrl', [ '$scope', '$http', function($scope, $http) {
	
	var boSmpUrl = "http://bo-smp.springmeetupparis.eu.cloudbees.net/"
//	var boSmpUrl = "http://localhost:8080"
		
	$http({ method: "GET", url: boSmpUrl+'/events/listAll', 
		headers: {
			"Access-Control-Allow-Origin": "http://localhost:8080",
			"Access-Control-Allow-Methods": "GET, OPTIONS", // POST, PUT, DELETE");
			"Access-Control-Allow-Max-Age": "3600", // POST, PUT, DELETE");
			"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
		}
	}).
    success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
    	$scope.events = data;
    }).
    error(function(data, status, headers, config) {
    	// called asynchronously if an error occurs
    	// or server returns response with an error status.
    	$scope.errorListEvent = "Error on get list Events..."
    });
	
	 
	
} ]);