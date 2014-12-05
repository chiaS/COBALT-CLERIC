angular.module('shouldIApp', [
	 'ui.router',
	 'shouldIApp.autoComplete'
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