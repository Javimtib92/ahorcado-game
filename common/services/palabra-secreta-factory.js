(function() {
    'use strict';
    angular.module('palabraSecretaModule',[])
    .factory('palabraSecreta', function() {
            /**
             * Objecte que conté la funcionalitat de generar una paraula secreta,
             * i emmagatzemar les lletres que han estat acertades. Aquest objecte l'injectarem
             * a gameController
             *
             * @private
             * @type {{palabraSecreta: Array, set: Function, get: Function, letrasAcertadas: Array, pushToLetrasAcertadas: Function, getLetrasAcertadas: Function}}
             */
        var object = {
                /** Conte la paraula secreta amb clar */
            palabraSecreta: [],

                /**
                 * Emmagatzema la paraula secreta que escriu el primer jugador
                 * @param palabraSecreta paraula escrita per el jugador
                 */
            set: function(palabraSecreta) {
                this.palabraSecreta = palabraSecreta.toLowerCase().split('');
            },
                /**
                 * @returns {*} la paraula secreta
                 */
            get: function() {
                return this.palabraSecreta;
            },
                /** Emmagatzema les lletres que han estat encertades */
            letrasAcertadas: [],

                /**
                 * Afageix una lletra a les lletres encertades
                 * @param lletra Lletra a afegir
                 * @param index Index de l'array on s'ha d'afegir la lletra
                 */
            pushToLetrasAcertadas : function (lletra, index) {
                this.letrasAcertadas[index] = lletra;
            },

                /**
                 * @returns {*} les lletres que han estat encertades
                 */
            getLetrasAcertadas : function () {
                return this.letrasAcertadas;
            }
        };
        return object;
    });
}());
