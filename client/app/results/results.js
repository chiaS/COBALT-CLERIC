'use strict';

angular.module('shouldIApp.results', [])

.controller('resultsController', function($scope, $timeout, AutoCompleteService) {
  $scope.answer = AutoCompleteService.getAnswer();
  $scope.message = '';

 // $scope.displayInfo = function(){
  	 var infoObj = AutoCompleteService.getInfo();
  	 $scope.url = infoObj.url;
  	 $scope.cover = infoObj.cover;
  	 $scope.message = 'View source';
//  };

});
