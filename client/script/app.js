angular.module('shouldIApp', [ 'ui.router'])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/search.html',
      controller: 'searchController'
    });
});