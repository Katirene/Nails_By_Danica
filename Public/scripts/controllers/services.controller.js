myApp.controller('ServicesController', ['$scope', 'ServicesFactory', function($scope, ServicesFactory) {
    console.log('Services Controller!');

    $scope.ServicesFactory = ServicesFactory;

    $scope.price = {
        nailpolishChange: '$5',
        naturalManicure: '$5',
        nailCallus: '$5',
        frenchManicure: '$5',
        manicureGel: '$5',
        IBS: '$5',
        toepolishChange: '$5',
        spaPedicure: '$5',
        toeCallus: '$5',
        toefrenchManicure: '$5',
        pedicureGel: '$5',
        advancedPedicure: '$5'
    };

    $scope.ServicesFactory.factoryGetPrices().then(function() {
        console.log(response);
    });


}]);