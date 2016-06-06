myApp.factory('ServicesFactory', ['$http', function($http) {


    function getPrices() {
        console.log('getting Prices');
        $http.get('/services').then(function(response) {
            console.log(response);
        });
    }

    return {
        getPrices: getPrices()
    }
}]);
