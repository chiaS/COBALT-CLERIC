angular.module('shouldIApp.services', [])
.factory('AutoCompleteService', function ($http) {
  var getSource = function(callback){
            return $http({
                    method: 'GET',
                    url: '/api/artists'
                  }).then(function(res){
                    callback(res.data.results);
                  });

             };
   
  return {
            getSource: getSource
         };
});
