/**
 * Created by javier on 2/01/15.
 */
"use strict";
angular.module('ahorcadoGame',['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.when('/', {
            templateIrl: 'partials/main.html',
            controller: 'mainController'
        });

    }])
    .controller('mainController' ['$scope', function($scope) {

    }]);