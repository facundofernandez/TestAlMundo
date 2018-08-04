
import angular from 'angular';

export default angular.module('FactoryHotels', [])

    .factory('api', ['$http', '$q','URL_API', function ($http, $q,URL_API) {
        return {

            getHoteles: function (params) {
                    
                return $q((resolve, reject) => {
                    
                    let url = '';

                    if (!url.length && params && params.name && params.star) url += `/name/${params.name}/stars/${params.star}`;

                    if (!url.length  && params && params.name) url += '/name/' + params.name;

                    if (!url.length && params && params.star) url += '/stars/' + params.star;

                    if(url.length) {
                        resolve($http.get(URL_API + url))
                    } else {
                        reject({error:"No se completaron los parametros correctamente."})
                    }
                })
            }
        }
    }]);

