"use strict";
angular.module('ahorcadoController',[])
    .controller('gameController', ['$scope', 'appFactory', function($scope, appFactory) {
        $scope.palabraSecreta = appFactory.getPalabraSecreta();
    }]);