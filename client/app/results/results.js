'use strict';

angular.module('shouldIApp.results', [])

.controller('resultsController', function($scope, AutoCompleteService) {
  $scope.answer = AutoCompleteService.getAnswer();
  $scope.message = '';
  //$scope.info.url, $scope.info.cover;
  $scope.displayInfo = function(){
  	 var infoObj = AutoCompleteService.getInfo();
  	 $scope.url = infoObj.url;
  	 $scope.cover = infoObj.cover;
  	 $scope.message = 'View source';
  }
});
