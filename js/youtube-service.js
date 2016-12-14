(function() {
    'use strict';

    function YoutubeService($http) {
        var service = {};

        //Returns the YouTube search results for the given query
        service.searchYouTube = function(query) {
            return $http({
                url :'https://www.googleapis.com/youtube/v3/search',
                method: 'GET',
                params :{
                    'part': 'snippet',
                    'order': 'relevance',
                    'q' : query,
                    'type':'video',
                    //Sharing this key in the hopes that it wont be abused 
                    'key':'AIzaSyC5p1NvIGrQna2cD_30-lp_qCOjjrUUsw0'
                }
            });
        }
		
        return service;
    }
	
    angular.module('SmartMirror')
        .factory('YoutubeService', YoutubeService);

}());