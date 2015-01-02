/**
 * Created by javier on 2/01/15.
 */
"use strict";
angular.module('ahorcadoGame',['ngRoute', 'appController', 'ahorcadoFactory', 'ahorcadoController'])
    .config(['$routeProvider', function($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'partials/main.html',
                controller: 'mainController'
            })
            .when('/game', {
                templateUrl: 'partials/ahorcado.html',
                controller: 'gameController'
            })
            .otherwise({redirectTo: '/'});
    }]);