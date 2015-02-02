/**
 * Created by javier on 2/01/15.
 */
(function() {
    'use strict';

    /**
     * Gestiona totes les rutes del programa i mostra el contingut
     * que pertany a cada ruta.
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
                .when('/game/error', {
                    templateUrl: 'error/errorView.html'
                })
                .otherwise({redirectTo: '/'});
        }])

        .controller('mainController', ['$location', function($location) {

        $location.path('/');

        }]);
})();