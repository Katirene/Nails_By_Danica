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
        console.log($scope.ServicesFactory.price.toepolishChange);
        $scope.price.nailpolishChange = $scope.ServicesFactory.price.nailpolishChange;
        $scope.price.naturalManicure = $scope.ServicesFactory.price.naturalManicure;
        $scope.price.nailCallus = $scope.ServicesFactory.price.nailCallus;
        $scope.price.frenchManicure = $scope.ServicesFactory.price.frenchManicure;
        $scope.price.manicureGel = $scope.ServicesFactory.price.manicureGel;
        $scope.price.IBS = $scope.ServicesFactory.price.IBS;
        $scope.price.toepolishChange = $scope.ServicesFactory.price.toepolishChange;
        $scope.price.spaPedicure = $scope.ServicesFactory.price.spaPedicure;
        $scope.price.toeCallus = $scope.ServicesFactory.price.toeCallus;
        $scope.price.toefrenchManicure = $scope.ServicesFactory.price.toefrenchManicure;
        $scope.price.pedicureGel = $scope.ServicesFactory.price.pedicureGel;
        $scope.price.advancedPedicure = $scope.ServicesFactory.price.advancedPedicure;
    });


}]);