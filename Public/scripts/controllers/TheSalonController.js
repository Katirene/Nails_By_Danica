myApp.controller('TheSalonController', ['$scope', function($scope) {
  console.log('Salon Controller!');

  $scope.myInterval = 4000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  $scope.slides = [{image: '../img/Footlogix_slide.png'}, {image: '../img/Footlogix_slide.png'}];
  //var currIndex = 0;


}]);
