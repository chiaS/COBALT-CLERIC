angular.module('shouldIApp.autoComplete', [])

.controller('Controller', function($scope, AutoCompleteService) {
   AutoCompleteService.getSource(function(artists){
     $scope.artists = artists;
   });
  
   $scope.searchArtist = function(){
     var artistName = $scope.data;
     AutoCompleteService.getResults(artistName, function(answer){
       $scope.answer = answer;	
     });
   }
})
