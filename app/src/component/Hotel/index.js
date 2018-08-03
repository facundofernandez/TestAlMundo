
import angular from 'angular';

export default angular.module('HotelComponent', [])

    .directive("hotel", function () {
        return {
            restrict: 'E',
            templateUrl: "/layout/directive_hotel.html",
            scope: {
                hotel: '=hotel'
            }
        }
    })
