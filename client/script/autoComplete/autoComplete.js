angular.module('shouldIApp.autoComplete', [])

.controller('Controller', function($scope, AutoCompleteService) {
   
})
.directive('autoComplete', function($timeout, AutoCompleteService) {	
 return function(scope, element, attrs) {
           AutoCompleteService.getSource(function(artists){
			scope.artists = artists;
	            element.autocomplete({
	              source: scope.artists
	            });
		   });
        };
});

