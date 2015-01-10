"use strict";
angular.module('ahorcadoController',[])
    .controller('gameController', ['$scope', 'appFactory', 'svgPathFactory', '$location', function($scope, appFactory, svgPathFactory, $location) {
        $scope.palabraSecreta = appFactory.getPalabraSecreta();
        $scope.palabraSecretaArray = $scope.palabraSecreta.split("");
        $scope.letrasAcertadas = [];
        $scope.errors = [];
        $scope.svg = [];
        $scope.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
            'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R',
            'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        var pathsArray = svgPathFactory;
        $scope.numErrors = 0;
        $scope.points = 200;
        
        $scope.submitLetter = function(lletra) {
            if($scope.isNotActive()) {
                var error = null; //Flag
                var i;
                
                for(i = 0; i < $scope.palabraSecretaArray.length; i++) {
                    if($scope.palabraSecretaArray[i] === lletra.toLowerCase()) {
                        $scope.letrasAcertadas[i] = lletra;  
                        error = false;
                        $scope.points += 20;
                    }
                }
            }
            
            if($scope.isNotActive() && error != false) {
                var found = findSameError(lletra);
                
                if(!found) {
                   pushError(lletra);
                }
                
                drawImagePath();
            }
            
            if($scope.errors.length == 7) {
                $location.url('/game/error');
            }
        };
        
        var findSameError = function(lletra) {
            var found = false;
            for(var i = 0; i < $scope.errors.length; i++) {
                    if($scope.errors[i] == lletra) {
                        found = true;
                    }
                }
            
            return found;
        }
        
        var pushError = function(lletra) {
            $scope.errors.push(lletra);
            $scope.numErrors++;
            $scope.points -= 10;
        }
        
        var pushCorrect = function(lletra) {
            
        }
        $scope.isNotActive = function() {
            return this.active == undefined;
        }
        
        var drawImagePath = function() {
            $scope.svg.push(pathsArray[$scope.svg.length]);
        }
        
        
        
    }]);