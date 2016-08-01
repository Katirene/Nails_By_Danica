var myApp = angular.module("myApp", ['ngRoute', 'ui.bootstrap', 'xeditable']);
console.log('We are in client-app.js AngularLand');


myApp.config(['$routeProvider', function($routeProvider) {
    console.log('Hitting Route Provider');
    $routeProvider
        .when('/home', {
            templateUrl: './templates/home.html'
        })
        .when('/aboutme', {
            templateUrl: './templates/about.html'
            //controller: 'AboutMeController'
        })
        .when('/services', {
            templateUrl: './templates/services.html',
            controller: 'ServicesController'
        })
        .when('/myblog', {
            //templateUrl: './templates/myblog.html',
            //controller: 'MyBlogController'
        })
        .when('/thesalon', {
            templateUrl: '/templates/thesalon.html',
            controller: 'TheSalonController'
        })
        .when('/admin', {
            templateUrl: '/templates/admin.html',
            controller: 'EditableTableCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);