'use strict';

angular.module('shouldIApp.results', [])

.controller('resultsController', function($scope, AutoCompleteService) {
  $scope.answer = AutoCompleteService.getAnswer();
});
