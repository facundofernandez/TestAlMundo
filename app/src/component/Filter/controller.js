
export default function controller($scope, api) {

    $scope.filerHotels = (event) => {
        event.preventDefault();
        let params = {};

        if($scope.checkbox.all){
            $scope.star="1,2,3,4,5";
        }
        
        if ($scope.nameHotel) params.name = $scope.nameHotel;
        if ($scope.star !== '') params.star = $scope.star;

        api.getHoteles(params).then((data) => {
            $scope.hotels = data.data;
        })
    };

    $scope.searchFormNameOpen = true;
    $scope.checkbox = {};
    $scope.checkbox.all = true;
    $scope.star = '';
    $scope.checkboxStar = () => {
        $scope.star = '';

        for (let c in $scope.checkbox) {
            if ($scope.checkbox[c] === true) {
                $scope.star += c[c.length - 1] + ",";
            }
        }
        $scope.star = $scope.star.slice(0, -1);


    }

    $scope.searchFormNameSwitch = () => {
        $scope.searchFormNameOpen = !$scope.searchFormNameOpen;
    }

    $scope.searchFormStarsOpen = true;
    $scope.searchFormStarsSwitch = () => {
        $scope.searchFormStarsOpen = !$scope.searchFormStarsOpen;
    }
}