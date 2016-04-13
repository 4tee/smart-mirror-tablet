(function(angular) {
    'use strict';

    function MirrorCtrl(AnnyangService, WeatherService, MapService, YoutubeService, $scope, $timeout, $interval, $location) {
        var _this = this;
		var DEFAULT_COMMAND_TEXT = '';
		
		$scope.listening = false;
		$scope.awaken = false;
        $scope.focus = "default";
        $scope.user = {};
        $scope.interimResult = DEFAULT_COMMAND_TEXT;
		
		
		function navigatePage(url){
			if (url == "home") $location.path("/");
			else if (url == "weather") $location.path("/"+url);
			else if (url == "map") $location.path("/"+url);
			else if (url == "youtube") $location.path("/"+url);
			else if (url == null) $location.path("/");
		}

        // Reset the command text
        var restCommand = function(){
		  $scope.isTalking = false;
          $scope.finalResult = DEFAULT_COMMAND_TEXT;
		  $scope.interimResult = '';
        }
		
		// Reset to Home page
        var defaultView = function() {
            $scope.focus = "default";
			navigatePage("home");
        }
		
		
		 
         _this.init = function() {
            var tick = $interval(updateTime, 1000);
            updateTime();
 			fetchWeather(config.location.name);
            restCommand();

             // List commands
 			AnnyangService.addCommand('Mirror (*args)', function(args) {
 				if (args == undefined) $scope.finalResult = "Mirror";
				$scope.awaken = true;
				console.debug('awken:' + $scope.awaken);
				defaultView();
 			});
			
 			AnnyangService.addCommand('Sleep', function(args) {
 				if (args == undefined) $scope.finalResult = "Sleep";
				defaultView();
				$scope.awaken = false;
 			});
			
 			AnnyangService.addCommand('Show me the commands', function() {
 				$scope.focus = "commands";
 			});
			
 			AnnyangService.addCommand('Go home', defaultView);
 			AnnyangService.addCommand('Exit', defaultView);
            
			
			AnnyangService.addCommand('My (name is)(name\'s) *name', function(name) {
                 $scope.focus = "default";
                 $scope.user.name = name;
 				 getGreeting($scope.date.getHours());
            });
			
			
			/* Annyang voice command area for weather */
            AnnyangService.addCommand('weather', function() {
 				$scope.focus = "default";
 				fetchWeather(config.location.name);
                navigatePage("weather");
            });
            AnnyangService.addCommand('weather (in)(at) *city', function(cityName) {
 				if (cityName != '') {
					fetchWeather(cityName);
                	navigatePage("weather");
				}
            });
			
			
			/* Annyang voice command area for map */
            AnnyangService.addCommand('map (of) *place', function(place) {
				if (place != '') {
					$scope.focus = "default";
 					$scope.map = MapService.generateMap(place);
                	navigatePage("map");
				}
	            AnnyangService.addCommand('larger', function() {
					$scope.focus = "default";
	 				$scope.map = MapService.zoomIn();
	            });
	            AnnyangService.addCommand('smaller', function() {
					$scope.focus = "default";
	 				$scope.map = MapService.zoomOut();
	            });
            });
            
			
			
			/* Annyang voice command area for youtube */
			AnnyangService.addCommand('show me (a) video (of) (about) *query', function(query){
				if (query != '') {
					YoutubeService.searchYouTube(query).then(function(results){
						$scope.focus = "default";
						$scope.videoId = results.data.items[0].id.videoId;
						$scope.playerVars = { controls: 0, autoplay: 1 };
						navigatePage("youtube");
					});
				}
			});
			
			
			/* Video shooting purpose only - to be deleted later */
			AnnyangService.addCommand('Google', function() {
				YoutubeService.searchYouTube('google').then(function(results){
					$scope.focus = "default";
					//$scope.videoId = results.data.items[0].id.videoId;
					$scope.videoId = 'SNtJF6Od1f8';
					$scope.playerVars = { controls: 0, autoplay: 1 };
					navigatePage("youtube");
				});
			});
            AnnyangService.addCommand('San Francisco', function() {
 				$scope.focus = "default";
 				fetchWeather('San Francisco');
                navigatePage("weather");
            });
			/*-----------------------------*/
			

			//Track when the Annyang is listening to us
            var resetCommandTimeout;
			var resetResultTimeout;
             
            AnnyangService.start(
 			function(listening){
                 $scope.listening = listening;
             }, 
 			function(interimResult){
 				$scope.isTalking = true;
 				$scope.interimResult = interimResult;
 				//$scope.finalResult = '';
				$timeout.cancel(resetCommandTimeout);
				resetCommandTimeout = $timeout(restCommand, 2000);
				
             },
 			function(result){
 				// $scope.isTalking = false;
				console.log('result at controller: ' + result);
 				//$scope.finalResult = '\"'+ result[0] + '\" is invalid command.';
 				$scope.finalResult += result[0];
				$scope.interimResult = '';
				$timeout.cancel(resetCommandTimeout);
				resetResultTimeout = $timeout(restCommand, 7000);
             },
 			function(resultMatch){
 				// $scope.isTalking = false;
				console.log('resultMatch: ' + resultMatch);
 				$scope.finalResult = resultMatch;
				$timeout.cancel(resetCommandTimeout);
				$timeout.cancel(resetResultTimeout);
				resetResultTimeout = $timeout(restCommand, 1000);
             });
         };
		 

		
		
		
		
		/**** HOME functions ****/
		
        function updateTime(){
            $scope.date = new Date();
			getGreeting($scope.date.getHours());
        }
		
		
		function getGreeting(hour){
			if (hour < 12) $scope.greeting = 'Good morning';
			else if (hour >= 12 && hour <= 17) $scope.greeting = 'Good afternoon';
			else if (hour > 17 && hour <= 24) $scope.greeting = 'Good evening';
			
			if ($scope.user.name != null) $scope.greeting += ', ' + $scope.user.name;
		}

		/***** End of Home Page functions ******/
		
		
		
		/******* WEATHER functions *******/
		function fetchWeather(cityName) {
  	    	WeatherService.getWeather(cityName).then(function(data){
				console.debug(data);
  	      		$scope.place = data;
				$scope.todayWeatherIcon = WeatherService.setWeatherIcon(data.item.condition.code);
				$scope.day1Icon = WeatherService.setWeatherIcon(data.item.forecast[1].code);
				$scope.day2Icon = WeatherService.setWeatherIcon(data.item.forecast[2].code);
				$scope.day3Icon = WeatherService.setWeatherIcon(data.item.forecast[3].code);
				$scope.day4Icon = WeatherService.setWeatherIcon(data.item.forecast[4].code);
  	    	});
		}
		
		/** End of WEATHER functions **/
		
		_this.init();
    }

    angular.module('SmartMirror')
        .controller('MirrorCtrl', MirrorCtrl);

}(window.angular));
