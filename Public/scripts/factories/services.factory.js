myApp.factory('ServicesFactory', ['$http', function($http) {

    var price;

    var getPrices = function() {
        console.log('getting Prices');
        var promise = $http.get('/services').then(function(err, response) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(response);
            }
        });
        return promise;
    };

    return {
        factoryGetPrices: function() {
            return getPrices();
        }
    }
}]);
