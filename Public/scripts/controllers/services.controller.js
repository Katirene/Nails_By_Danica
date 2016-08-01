myApp.controller('ServicesController', ['$scope', 'ServicesFactory', function($scope, ServicesFactory) {
    console.log('Services Controller!');

    $scope.ServicesFactory = ServicesFactory;

    $scope.services = [];

    $scope.ServicesFactory.factoryGetPrices().then(function() {
        $scope.services = $scope.ServicesFactory.watchservicesObjects();
    });


}]);