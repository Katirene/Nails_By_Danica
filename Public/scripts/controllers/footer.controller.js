myApp.controller('FooterController', ['$scope', '$window', function($scope, $window) {

    $scope.openMaps = function() {
        // If it's an iPhone..
        if ((navigator.platform.indexOf("iPhone") != -1)
            || (navigator.platform.indexOf("iPod") != -1)
            || (navigator.platform.indexOf("iPad") != -1))
            window.open("maps://www.google.com/maps/place/3939+W+69th+St+%2318,+Minneapolis,+MN+55435/@44.8776379,-93.3329216,17z/data=!3m1!4b1!4m5!3m4!1s0x87f626a830de4b1d:0x2545c23803bf8ebd!8m2!3d44.8776379!4d-93.3307329");
        else
            window.open("https://www.google.com/maps/place/3939+W+69th+St+%2318,+Minneapolis,+MN+55435/@44.8776379,-93.3329216,17z/data=!3m1!4b1!4m5!3m4!1s0x87f626a830de4b1d:0x2545c23803bf8ebd!8m2!3d44.8776379!4d-93.3307329");
    }

}]);