/**
 * Created by javier on 2/01/15.
 */
(function() {
    'use strict';
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
                .when('/game/error', {
                    templateUrl: 'error/errorView.html'
                })
                .otherwise({redirectTo: '/'});
        }])

        .controller('mainController', ['$location', function($location) {

        $location.path('/');

        }]);
})();