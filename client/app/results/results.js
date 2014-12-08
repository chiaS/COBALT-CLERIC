'use strict';

angular.module('shouldIApp.results', [])

.controller('resultsController', function($scope, AutoCompleteService) {
  $scope.answer = AutoCompleteService.getAnswer();
  $scope.displayInfo = function(event){
  	$scope.info = AutoCompleteService.getInfo();
  	//'http://pitchfork.com/reviews/albums/18614-lorde-pure-heroine/';
  }
});
