(function() {
    'use strict';
	
	function BusService($http, $q, $templateCache) {
		var service = {};
		
		service.getAPIKey = function() {
	    var deferred = $q.defer();
			var time = Math.floor(Date.now() / 1000);
			var hash = CryptoJS.SHA256(config.apiKey + config.apiSecret + time).toString(CryptoJS.enc.Hex);

			var url = config.busURL + "/v1/getAccessToken/" + hash + "/" + config.apiKey + "/" + time;
			
			$.getJSON(url+"?callback=?", function(data) {
				service.accessToken = data.data.parameters.accessToken;
				deferred.resolve(data.data.parameters.accessToken);
			})
			.fail(function() {
				deferred.reject("error");
			});
    
			return deferred.promise;
			
		}
		/* getWeather will use Yahoo API to capture the weather forecast using the location parameters */
		service.getBusTiming = function(busStop, busNumbers) {
		    var deferred = $q.defer();
				
				var url = config.busURL + "/v1/getBusTimings/" + service.accessToken + "/" + busStop + "/" + busNumbers;
				$.getJSON(url+"?callback=?", function(data) {
					deferred.resolve(data.data.parameters);
				})
				.fail(function() {
					deferred.reject("error");
				});

		    return deferred.promise;
		}
		
		return service;
	}

    angular.module('SmartMirror')
        .factory('BusService', BusService);

}());
