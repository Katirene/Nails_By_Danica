var myApp = angular.module("myApp", ['ngRoute', 'ui.bootstrap']);
console.log('We are in client-app.js AngularLand');

myApp.config(['$routeProvider', function($routeProvider) {
    console.log('Hitting Route Provider');
    $routeProvider
        .when('/aboutme', {
            //templateUrl: './templates/aboutme.html',
            //controller: 'AboutMeController'
        })
        .when('/services', {
            //templateUrl: './templates/services.html',
            //controller: 'ServicesController'
        })
        .when('/myblog', {
            //templateUrl: './templates/myblog.html',
            //controller: 'MyBlogController'
        })
        .when('/thesalon', {
            //templateUrl: './templates/thesalon.html',
            //controller: 'TheSalonController'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);