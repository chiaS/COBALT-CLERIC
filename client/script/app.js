'use strict';

angular.module('shouldIApp', [
	 'ui.router',
	 'shouldIApp.autoComplete',
   'shouldIApp.services',
   'shouldIApp.results'
	 ])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'script/autoComplete/autoComplete.html',
      controller: 'Controller'
    })
    .state('result', {
      url: '/results',
      templateUrl: 'script/results/resultsPage.html',
      controller: 'resultsController'
    });
});
