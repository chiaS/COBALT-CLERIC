angular.module('shouldIApp.services', [])
.factory('AutoCompleteService', function ($http) {
  var answer = '?';
  var getSource = function(callback){
    return $http({
            method: 'GET',
            url: '/api/artists'
          }).then(function(res){
            var result = [];
            res.data.results.forEach(function(artist){
              result.push({name: artist});
            });

            callback(result);
          });
     };
  var getResults = function(artist, callback){
    console.log(artist);
    return $http({
            method: 'GET',
            url: '/api/artists/'+ artist
          }).then(function(res){
            console.log('this is working');
            answer = res.data;
            console.log('get result',res.data);
            callback(res.data);
          }).catch(function(){
            console.error('something screwed up');
          });
  };
  var getAnswer = function(){
    return answer;
  };
  var setAnswer = function(ans){
    console.log('setting answer to '+ ans);
    answer = ans;
  }
  return {  
            getSource: getSource,
            getResults: getResults,
            getAnswer: getAnswer,
            setAnswer: setAnswer
          };
});
