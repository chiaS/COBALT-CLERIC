angular.module('shouldIApp.services', [])
.factory('AutoCompleteService', function ($http) {
  var answer;
  var getSource = function(callback){
    return $http({
            method: 'GET',
            url: '/api/artists'
          }).then(function(res){
            callback(res.data.results);
          });
     };
  var getResults = function(artist, callback){
    console.log(artist);
    return $http({
            method: 'GET',
            url: '/api/artists/'+ artist
          }).then(function(res){
            answer = res.data;
            console.log('get result',res.data);
            callback(res.data);
          });
  };
  var getAnswer = function(){
    alert('in answer ', answer);
    return answer;
  };
  return {  
            getSource: getSource,
            getResults: getResults,
            getAnswer: getAnswer

          };
});
