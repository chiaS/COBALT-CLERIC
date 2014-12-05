angular.module('shouldIApp.autoComplete', [])
.controller('Controller', function($scope) {
  $scope.names = ["john", "bill", "charlie", "robert",
     "alban", "oscar", "marie", "celine", "brad", "drew", 
     "rebecca", "michel", "francis", "jean", "paul", "pierre", 
     "nicolas", "alfred", "gerard", "louis", "albert", "edouard", 
     "benoit", "guillaume", "nicolas", "joseph"];
})
.directive('autoComplete', function($timeout) {
  return function(scope, element, attrs) {
        console.log(scope.names);
            element.autocomplete({
            source: scope.names
            });
        }
});

