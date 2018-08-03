
import angular from 'angular';
import controller from './controller';

export default angular.module('FilterComponent', [])

.directive("searchHotels", function () {
    return {
        restrict: 'E',
        templateUrl: "/layout/directive_search.html",
        scope: {
            hotels: '=hotels'
        },
        controller: ["$scope", 'api', controller ]
    }
});
