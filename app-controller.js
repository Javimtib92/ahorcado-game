/**
 * Created by javier on 2/01/15.
 */
"use strict";
angular.module('appController',[])
    .controller('mainController', ['$scope', 'appFactory', '$location', function($scope, appFactory, $location) {

        $scope.palabraSecreta = appFactory.getPalabraSecreta();

        $scope.insertarPalabraSecreta = function() {
            appFactory.setPalabraSecreta($scope.palabraSecreta);
            $location.path('/game');
        }
    }]);