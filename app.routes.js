/**
 * Created by javier on 2/01/15.
 */
(function() {
    'use strict';

    /**
     * Manages all the routes of the program and display the content
     * linked to each route.
     */
    angular.module('appRoutesModule',[])
        .config(['$routeProvider', function($routeProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: 'home/homeView.html'
                })
                .when('/palabra', {
                    templateUrl: 'word/wordView.html',
                    controller: 'wordController'
                })
                .when('/game', {
                    templateUrl: 'game/gameView.html',
                    controller: 'gameController'
                })
                .when('/game/gameover', {
                    templateUrl: 'game/gameover/gameoverView.html',
                    controller: 'gameController'
                })
                .when('/game/congratulations', {
                    templateUrl: 'game/congratulations/congratulations.html',
                    controller: 'gameController'
                })
                .otherwise({redirectTo: '/'});
        }])

        .controller('mainController', ['$location', function($location) {

        $location.path('/');

        }]);
})();