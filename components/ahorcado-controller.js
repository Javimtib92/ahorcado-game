"use strict";
angular.module('ahorcadoController',[])
    .controller('gameController', ['$scope', 'appFactory', function($scope, appFactory) {
        $scope.palabraSecreta = appFactory.getPalabraSecreta();
        $scope.palabraSecretaArray = $scope.palabraSecreta.split("");

        $scope.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
            'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R',
            'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    }]);