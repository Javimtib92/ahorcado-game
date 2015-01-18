(function() {
    'use strict';
    angular.module('gameControllerModule',[])
    .controller('gameController', ['$scope', 'palabraSecreta', 'svgPathFactory', '$location', function($scope, palabraSecreta, svgPathFactory, $location) {
        
        $scope.points = 200;
        $scope.numErrors = 0;
        var MAX_ERRORS = 7;
        
        $scope.palabraSecreta = palabraSecreta.get();
        
        $scope.acertadas = palabraSecreta.getPalabrasAcertadas();
        $scope.errors = [];
        
        $scope.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
            'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R',
            'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        
        $scope.submitLetter = function(lletra, element) {
            
            var found = findLetter(lletra);
            
            if(element.active === undefined) {
                if(found) {
                    $scope.points += 20;
                } else {
                    pushError(lletra);
                    svgPathFactory.drawImagePath();
                }
                
                element.active = true;
            }
            
            if($scope.errors.length === MAX_ERRORS) {
                $location.url('/game/error');
            }
        };
        
        var findLetter = function(lletra) {
            var i;
            var found = false;
            
            for(i = 0; i < $scope.palabraSecreta.length; i++) {
                if($scope.palabraSecreta[i] === lletra.toLowerCase()) {
                    palabraSecreta.pushToPalabrasAcertadas(lletra,i);
                    found = true;
                }
            }
            return found;
        };
        
        var pushError = function(lletra) {
            $scope.errors.push(lletra);
            $scope.numErrors++;
            $scope.points -= 10;
        };
    }]);
}());
