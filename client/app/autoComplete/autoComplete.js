angular.module('shouldIApp.autoComplete', [])

.controller('Controller', function($scope, AutoCompleteService) {
   //fetching artist list 
   AutoCompleteService.getSource(function(artists){
     $scope.artists = artists;
   });


  
   // $scope.searchArtist = function(){
   //   alert('pressed btn');
   //   var artistName = $scope.data;
   //   AutoCompleteService.getResults(artistName, function(answer){
   //     $scope.answer = answer;	
   //   });
   // }
})
