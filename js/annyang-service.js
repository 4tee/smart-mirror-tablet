(function(annyang) {
    'use strict';

    function AnnyangService($rootScope) {
        var service = {};

        // COMMANDS
        service.commands = {};


        service.addCommand = function(phrase, callback) {
            var command = {};

            // Wrap annyang command in scope apply
            command[phrase] = function(arg1, arg2) {
                $rootScope.$apply(callback(arg1, arg2));
            };

            // Extend our commands list
            angular.extend(service.commands, command);

            // Add the commands to annyang
            annyang.addCommands(service.commands);
            console.debug('added command "' + phrase + '"', service.commands);
        };
		
		

        service.start = function(listening, interimResult, result, resultMatch) {
            annyang.addCommands(service.commands);
            annyang.debug(true);
            annyang.start();
			
            if (typeof(listening) == "function") {
                annyang.addCallback('start', function(){
					$rootScope.$apply(listening(true));
				});
                annyang.addCallback('end', function(){
					$rootScope.$apply(listening(false));
				});
            };
            if (typeof(interimResult) == "function") {
                annyang.addCallback('interimResult', function(data){
					console.debug("interimResult: " + data);
					$rootScope.$apply(interimResult(data));
				});
            };
            if (typeof(result) == "function") {
				 annyang.addCallback('result', function(data){
					$rootScope.$apply(result(data));
					console.debug("Possible results: " + data);
				});
            };
            if (typeof(resultMatch) == "function") {
                annyang.addCallback('resultMatch', function(data){
					$rootScope.$apply(resultMatch(data));
					console.debug("Matched Result: " + data);
				});
            };
        };

        return service;
    }

    angular.module('SmartMirror')
        .factory('AnnyangService', AnnyangService);

}(window.annyang));
