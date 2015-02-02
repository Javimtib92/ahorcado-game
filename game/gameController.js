(function() {
    'use strict';
    angular.module('gameControllerModule',[])
    .controller('gameController', ['$scope', 'palabraSecreta', 'svgPathFactory', '$location', function($scope, palabraSecreta, svgPathFactory, $location) {

            /**
             * Emmagatzema la puntuació del jugador que ha d'adivinar la paraula
             * @type {number}
             */
        $scope.points = 200;

            /**
             * Recompte de errors que es mostrarà al jugador
             * @type {number}
             */
        $scope.numErrors = 0;

            /**
             * El máxim nombre d'errors que pot cometre el jugador
             * @const
             * @type {number}
             */
        var MAX_ERRORS = 7;

            /** Emmagatzema la paraula en clar
             * @type {string}
             * */
        $scope.palabraSecreta = palabraSecreta.get();

            /** Emmagatzema les lletres que han estat acertades
             * @type {string}
             * */
        $scope.acertadas = palabraSecreta.getLetrasAcertadas();

            /** Emmagatzema les lletres que han estat erronees
             * @type {string[]}
             * */
        $scope.errors = [];

            /** Emmagatzema les lletres del alfabet que utilitzarem per la
             * seva visualització gràfica.
             * @type {string[]}
             */
        $scope.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
            'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R',
            'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

            /**
             * Implementa la funcionalitat de provar una lletra. Si la lletra es troba
             * a la paraula llavors s'afegeixen 20 punts. Si no es troba, la lletra es
             * afegida al recompte de lletres errònees i es dibuixa una part del ninot.
             *
             * Si el nombre d'errors es major al màxim permés llavors redirecciona a la pàgina d'error
             *
             * @param lletra Lletra que eligeix el jugador a través del teclat gràfic
             * @param element Botó pitjat que conté la lletra. En ser pitjat, aquest prendrà
             * l'estat d'actiu i per tant no es podrà tornar a pitjar.
             */
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

            /**
             * Aquesta funció comprova si la lletra que cercam coincideix amb colcuna de les
             * lletres de la paraula. Si es així s'afageix la lletra a les lletres encertades amb
             * la posició que te aquesta dins la paraula secreta per tal de afegir-la gràficament al lloc
             * que li toca.
             *
             * @private
             * @param lletra Lletra que volem cercar dins la paraula
             * @returns {boolean} Vertader si la lletra s'ha trobat dins la paraula, si no es així retorna fals
             */
        var findLetter = function(lletra) {
            var i;
            var found = false;
            
            for(i = 0; i < $scope.palabraSecreta.length; i++) {
                if($scope.palabraSecreta[i] === lletra.toLowerCase()) {
                    palabraSecreta.pushToLetrasAcertadas(lletra,i);
                    found = true;
                }
            }
            return found;
        };

            /**
             * Afegeix una lletra al contenedor de lletres errònees, afegeix un error
             * al contador de errors i resta 10 punts a la puntuació del jugador.
             *
             * @private
             * @param lletra Lletra que s'afegirà al contenedor d'errors
             */
        var pushError = function(lletra) {
            $scope.errors.push(lletra);
            $scope.numErrors++;
            $scope.points -= 10;
        };
    }]);
}());
