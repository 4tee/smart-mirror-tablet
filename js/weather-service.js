(function() {
    'use strict';
	
	function WeatherService($http, $q) {
		var service = {};
		
		/* getWeather will use Yahoo API to capture the weather forecast using the location parameters */
		service.getWeather = function(cityName) {
		    var deferred = $q.defer();
			
			
			/*var 
			cityQuery = "select woeid from geo.places(1) where text='" + cityName + "'",
			locationQuery = escape("select * from weather.forecast where woeid in ("+cityQuery+") and u='c'"),
		    locationUrl = "https://query.yahooapis.com/v1/public/yql?q=" + locationQuery + "&format=json&diagnostics=true&callback=";*/
			
			var 
			cityQuery = "select woeid from geo.places(1) where text='" + cityName + "'",
			locationQuery = escape("select * from weather.forecast where woeid in ("+cityQuery+") and u='c'"),
		    locationUrl = "https://query.yahooapis.com/v1/public/yql?q=" + locationQuery + "&format=json&env=store://datatables.org/alltableswithkeys";
			
	
			//     $http.get('https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20weather.forecast%20WHERE%20location%3D%22' + zip
			// + '%22&format=json&diagnostics=true&callback=')
		    $http.get(locationUrl)
		      .success(function(data){
		        deferred.resolve(data.query.results.channel);
		      })
		      .error(function(err){
		        console.log('Error retrieving markets');
		        deferred.reject(err);
		      });
		    return deferred.promise;
		}
		
		
		/* Convert the condition statement to equivalent weather icon using the weathericon fonts */
		service.setWeatherIcon = function(condid) {
			var weatherIcon;
			
			  switch(condid) {
			    case '0': weatherIcon  = 'wi-tornado';
			    break;
			    case '1': weatherIcon  = 'wi-storm-showers';
			    break;
			    case '2': weatherIcon  = 'wi-tornado';
			    break;
			    case '3': weatherIcon  = 'wi-thunderstorm';
			    break;
			    case '4': weatherIcon  = 'wi-thunderstorm';
			    break;
			    case '5': weatherIcon  = 'wi-snow';
			    break;
			    case '6': weatherIcon  = 'wi-rain-mix';
			    break;
			    case '7': weatherIcon  = 'wi-rain-mix';
			    break;
			    case '8': weatherIcon  = 'wi-sprinkle';
			    break;
			    case '9': weatherIcon  = 'wi-sprinkle';
			    break;
			    case '10': weatherIcon  = 'wi-hail';
			    break;
			    case '11': weatherIcon  = 'wi-showers';
			    break;
			    case '12': weatherIcon  = 'wi-showers';
			    break;
			    case '13': weatherIcon  = 'wi-snow';
			    break;
			    case '14': weatherIcon  = 'wi-storm-showers';
			    break;
			    case '15': weatherIcon  = 'wi-snow';
			    break;
			    case '16': weatherIcon  = 'wi-snow';
			    break;
			    case '17': weatherIcon  = 'wi-hail';
			    break;
			    case '18': weatherIcon  = 'wi-hail';
			    break;
			    case '19': weatherIcon  = 'wi-cloudy-gusts';
			    break;
			    case '20': weatherIcon  = 'wi-fog';
			    break;
			    case '21': weatherIcon  = 'wi-fog';
			    break;
			    case '22': weatherIcon  = 'wi-fog';
			    break;
			    case '23': weatherIcon  = 'wi-cloudy-gusts';
			    break;
			    case '24': weatherIcon  = 'wi-cloudy-windy';
			    break;
			    case '25': weatherIcon  = 'wi-thermometer';
			    break;
			    case '26': weatherIcon  = 'wi-cloudy';
			    break;
			    case '27': weatherIcon  = 'wi-night-cloudy';
			    break;
			    case '28': weatherIcon  = 'wi-day-cloudy';
			    break;
			    case '29': weatherIcon  = 'wi-night-cloudy';
			    break;
			    case '30': weatherIcon  = 'wi-day-cloudy';
			    break;
			    case '31': weatherIcon  = 'wi-night-clear';
			    break;
			    case '32': weatherIcon  = 'wi-day-sunny';
			    break;
			    case '33': weatherIcon  = 'wi-night-clear';
			    break;
			    case '34': weatherIcon  = 'wi-day-sunny-overcast';
			    break;
			    case '35': weatherIcon  = 'wi-hail';
			    break;
			    case '36': weatherIcon  = 'wi-day-sunny';
			    break;
			    case '37': weatherIcon  = 'wi-thunderstorm';
			    break;
			    case '38': weatherIcon  = 'wi-thunderstorm';
			    break;
			    case '39': weatherIcon  = 'wi-thunderstorm';
			    break;
			    case '40': weatherIcon  = 'wi-storm-showers';
			    break;
			    case '41': weatherIcon  = 'wi-snow';
			    break;
			    case '42': weatherIcon  = 'wi-snow';
			    break;
			    case '43': weatherIcon  = 'wi-snow';
			    break;
			    case '44': weatherIcon  = 'wi-cloudy';
			    break;
			    case '45': weatherIcon  = 'wi-lightning';
			    break;
			    case '46': weatherIcon  = 'wi-snow';
			    break;
			    case '47': weatherIcon  = 'wi-thunderstorm';
			    break;
			    case '3200': weatherIcon  =  'wi-cloud';
			    break;
			    default: weatherIcon  =  'wi-cloud';
			    break;
			}
			
			return 'wi ' + weatherIcon;
		}
		
		return service;
	}

    angular.module('SmartMirror')
        .factory('WeatherService', WeatherService);

}());
