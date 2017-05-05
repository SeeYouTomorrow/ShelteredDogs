var animalsApp = angular.module('animalsApp', ['ngRoute']);

// I`m passing function and its dependencies through an array to protect them from future minification
animalsApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/animals_list',{
            templateUrl: 'views/animals_list.html',
            controller: 'AnimalsController'
        }).otherwise({
            redirectTo: '/home'
        })
}]);
