'use strict';

angular.module('shouldIApp', [
	 'ui.router',
	 'shouldIApp.autoComplete',
   'shouldIApp.services'
	 ])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'script/autoComplete/autoComplete.html',
      controller: 'Controller'
  });
});
