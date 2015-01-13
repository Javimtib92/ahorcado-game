/**
 * Created by javier on 2/01/15.
 */
"use strict";
angular.module('appRoutesModule',[])
    .config(['$routeProvider', function($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'home/homeView.html',
                controller: 'wordController'
            })
            .when('/palabra', {
                templateUrl: 'word/wordView.html',
                controller: 'wordController'
            })
            .when('/game', {
                templateUrl: 'game/gameView.html',
                controller: 'gameController'
            })
            .when('/game/error', {
                templateUrl: 'error/errorView.html'
            })
            .otherwise({redirectTo: '/'});
    }]);