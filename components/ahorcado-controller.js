"use strict";
angular.module('ahorcadoController',[])
    .controller('gameController', ['$scope', 'appFactory', function($scope, appFactory) {
        $scope.palabraSecreta = appFactory.getPalabraSecreta();
        $scope.palabraSecretaArray = $scope.palabraSecreta.split("");
        $scope.dashArray = [];

        $scope.dashArrayFill = function() {
            var i;
            for(i = 0; i < $scope.palabraSecretaArray.length; i++) {
                $scope.dashArray[i] = "_";
            }
        };
        $scope.dashArrayFill();
    }]);