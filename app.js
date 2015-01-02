/**
 * Created by javier on 2/01/15.
 */
"use strict";
angular.module('ahorcadoGame',['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $routeProvider.when('/', {
            templateUrl: 'partials/main.html',
            controller: 'mainController'
        })
            .otherwise({redirectTo: '/'})

    }])
    .controller('mainController' ['$scope', function($scope) {

    }]);