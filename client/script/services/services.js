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
  var getResults = function(artist, callback){
    console.log('hello '+artist);
    return $http({
            method: 'GET',
            url: '/api/artists/:'+ artist
          }).then(function(res){
          // console.log('get result',res.data);
            callback(res.data.results);
          });
  }
 
});
