'use strict';

angular.module('shouldIApp.autoComplete', [])

.controller('Controller', function($scope, AutoCompleteService) {

})
.directive('autoComplete', function($timeout, AutoCompleteService) {
  return function(scope, element, attrs) {
        //console.log(AutoCompleteService.getSource());
            element.autocomplete({
              source: AutoCompleteService.getSource()
            });
        };
});

