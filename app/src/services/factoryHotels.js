
import angular from 'angular';

export default angular.module('FactoryHotels', [])
 
.factory('api', ['$http', function ($http) {
    return {
        
        getHoteles: function (params) {
            let url = '?';
            if(params && params.name) url += 'name='+params.name;
            if(params && params.star) {
                if(params && params.name) url +='&';
                url += 'estrellas='+params.star;
            };
            
            return $http.get('http://localhost:8000/hoteles'+url)
        }
    }
}]);

