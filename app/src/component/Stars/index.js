
import angular from 'angular';

export default angular.module('StarsComponent', [])

.directive("stars", function () {
    return {
        restrict: 'E',
        templateUrl: "/layout/directive_stars.html",
        scope: {
            number: '=number'
        },
        controller: ["$scope", controller]
    }
})

function controller($scope) {

    $scope.stars = [];
    
    for(let i=1;i<=$scope.number;i++ ){
        $scope.stars.push({
            value: i
        })
    }
    

}