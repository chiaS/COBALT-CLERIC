angular.module('shouldIApp.services', [])
.factory('AutoCompleteService', function ($http) {
  var getSource = function(callback){
            return $http({
                    method: 'GET',
                    url: '/api/artists'
                  }).then(function(res){
                    console.log(res.results);
                    callback(res.results);
                  });

             };
   
  return {
            getSource: getSource
          };
});
