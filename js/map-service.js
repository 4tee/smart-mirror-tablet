(function(annyang) {
    'use strict';

    function MapService() {
        var map = {};
        map.center = config.location.name; //default map locaiton
        map.zoom = config.location.zoom; //default zoom is 14

        map.generateMap = function(targetCenter, targetZoom) {
            if (targetCenter === undefined) {
                targetCenter = map.center;
            } else{
                //when we change the center of the map keep track of it
                map.center = targetCenter;
            }
            if (targetZoom === undefined) {
                targetZoom = map.zoom;
            }
            return "https://maps.googleapis.com/maps/api/staticmap?center="+targetCenter+"&zoom="+targetZoom+
            "&format=png&sensor=false&scale=2&size="+window.innerWidth+
            "x1200&maptype=roadmap&style=visibility:on|weight:1|invert_lightness:true|saturation:-100|lightness:1";
        };

        map.zoomIn = function() {
            map.zoom = map.zoom + 1;
            return map.generateMap(map.center);
        };

        map.zoomTo = function(value) {
            if(0 + value < 0 || value == "zero"){
              value = 0
            } else if(0 + value > 18){
              value = 18
            }
            map.zoom = value;
            return map.generateMap(map.center);
        };

        map.zoomOut = function() {
            map.zoom = map.zoom - 1;
            return map.generateMap(map.center);
        };

        map.reset = function() {
            map.zoom = 13;
            return map.generateMap(map.center);
        };

        return map;
    }

    angular.module('SmartMirror')
        .factory('MapService', MapService);

}(window.annyang));