'use strict';

angular.module('shouldIApp', [
	 'ui.router',
   'angucomplete',
   'shouldIApp.autoComplete',
   'shouldIApp.services',
   'shouldIApp.results'
	 ])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/autoComplete/autoComplete.html',
      controller: 'Controller'
    })
    .state('result', {
      url: '/results',
      templateUrl: 'app/results/resultsPage.html',
      controller: 'resultsController'
    });
});
