import angular from 'angular';

// Importo Estilos
import './sass/main.scss';

// Importo Directivas (Coponentes)
import HotelComponent from './component/Hotel';
import StarsComponent from './component/Stars';
import FilterComponent from './component/Filter';

// Importo Servicio
import FactoryHotels  from './services/factoryHotels'

//Importo Directivas (Funcionalidades)
import OnErrorSrc from './directives/onErrorSrc';

// Inyecto dependencias
angular.module('APP', [
    HotelComponent.name,
    StarsComponent.name,
    FilterComponent.name,
    FactoryHotels.name,
    OnErrorSrc.name
])
    .controller('mainController', ["$scope", 'api', function ($scope, api) {
       
        let _this = $scope;
        
        // De ejemplo y prueba se traen todos los hoteles
        api.getHoteles({star:'1,2,3,4,5'}).then((data) => {
            _this.hotels = data.data;
        });

    }])