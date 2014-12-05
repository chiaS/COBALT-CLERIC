'use strict';

angular.module('shouldIApp.services', [])
.factory('AutoCompleteService', function ($http) {
  var getSource = function(){
       names = ["john", "bill", "charlie", "robert",
       "alban", "oscar", "marie", "celine", "brad", "drew",
       "rebecca", "michel", "francis", "jean", "paul", "pierre",
       "nicolas", "alfred", "gerard", "louis", "albert", "edouard",
       "benoit", "guillaume", "nicolas", "joseph"];
       return names;
    }
  return {
    getSource: getSource
  };
});
