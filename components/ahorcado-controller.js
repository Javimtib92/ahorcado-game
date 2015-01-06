"use strict";
angular.module('ahorcadoController',[])
    .controller('gameController', ['$scope', 'appFactory', function($scope, appFactory) {
        $scope.palabraSecreta = appFactory.getPalabraSecreta();
        $scope.palabraSecretaArray = $scope.palabraSecreta.split("");
        $scope.fillerArray = [];
        $scope.errors = [];
        
        $scope.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
            'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R',
            'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        $scope.submitLetter = function(letter) {
            var error = null;
            if(this.active == undefined) {
                for(var i = 0; i < $scope.palabraSecretaArray.length; i++) {
                    if($scope.palabraSecretaArray[i] === letter.toLowerCase()) {
                        $scope.fillerArray[i] = letter;  
                        error = false;
                    }
                }
            }
            
            if(error != false) {
                var finded = false;
                for(var i = 0; i < $scope.errors.length; i++) {
                    if($scope.errors[i] == letter) {
                        finded = true;
                    }
                }
                
                if(!finded) {
                    $scope.errors.push(letter);
                } 
            }
        };
    }]);