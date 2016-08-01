myApp.factory('ServicesFactory', ['$http', function($http) {

    var servicesObjects = [];

    var getPrices = function() {
        console.log('getting Prices');
        var promise = $http.get('/services').then(function(response) {
            servicesObjects = response.data;
        });
        return promise;
    };

    var updateServices = function(user) {
        console.log("updated User in Factory", user);
        var promise = $http.post('/services/', user).then(function(response) {
            servicesObjects = response.data;
        });
        return promise;
    };


    function returnservicesObjects() {
        return servicesObjects;
    }


    return {
        factoryGetPrices: function() {
            return getPrices();
        },
        factoryUpdateService: function(user) {
            return updateServices(user)
        },
        servicesObjects: servicesObjects,
        watchservicesObjects: returnservicesObjects
    }
}]);

