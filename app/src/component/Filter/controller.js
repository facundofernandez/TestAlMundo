
export default function controller($scope, api) {

    $scope.searchFormStarsOpen = true;
    $scope.searchFormNameOpen = true;
    $scope.checkbox = {};
    $scope.checkbox.all = true;
    $scope.star = '';

    // Busqueda de Hoteles segun parmetros
    $scope.filerHotels = (event) => {

        event.preventDefault();
        let params = {};

        if ($scope.checkbox.all) $scope.star = "1,2,3,4,5";
        if ($scope.nameHotel) params.name = $scope.nameHotel;
        if ($scope.star !== '') params.star = $scope.star;

        api.getHoteles(params).then((data) => {
            let hotels = data.data;
            $scope.hotels = data.data;
        }).catch((e) => {
            console.warn(e.error);
            $scope.hotels = [];
        })
    };

    // Transforma los datos de los check en un string de numeros separados por comas
    $scope.checkboxStar = () => {
        $scope.star = '';
        for (let c in $scope.checkbox) {
            if ($scope.checkbox[c] === true) {
                $scope.star += c[c.length - 1] + ",";
            }
        }
        $scope.star = $scope.star.slice(0, -1);
    }

    // Abre panel de busqueda por nombre
    $scope.searchFormNameSwitch = () => $scope.searchFormNameOpen = !$scope.searchFormNameOpen;
    
    // Abre panel de busqueda por estrellas
    $scope.searchFormStarsSwitch = () => $scope.searchFormStarsOpen = !$scope.searchFormStarsOpen;

}