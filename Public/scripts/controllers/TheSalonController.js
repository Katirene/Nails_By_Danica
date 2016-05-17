myApp.controller('TheSalonController', ['$scope', function($scope) {
  console.log('Salon Controller!');

  $scope.myInterval = 4000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  $scope.slides = [{image: 'http://fillmurray.com/g/200/300'}, {image: 'http://fillmurray.com/200/300'}];
  //var currIndex = 0;


}]);
