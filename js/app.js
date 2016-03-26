(function(angular) {
    'use strict';

    angular.module('SmartMirror', ['ngAnimate','ngRoute','youtube-embed'])
	.config( 
		['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'html/home.html'
			})
			.when('/weather', {
				templateUrl: 'html/weather.html'
			})
			.when('/map', {
				templateUrl: 'html/map.html'
			})
			.when('/youtube', {
				templateUrl: 'html/youtube.html'
			})
			.otherwise({
				redirectTo: '/'
			});
		}])
	.directive('footer', function () {
	    return {
	        restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
	        replace: true,
	        templateUrl: "html/footer.html"
	    }
	})
	;

}(window.angular));