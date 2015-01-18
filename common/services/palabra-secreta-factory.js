(function() {
    'use strict';
    angular.module('palabraSecretaModule',[])
    .factory('palabraSecreta', function() {
        var object = {
            palabraSecreta: [],
            set: function(palabraSecreta) {
                this.palabraSecreta = palabraSecreta.toLowerCase().split('');
            },
            get: function() {
                return this.palabraSecreta;
            },
            palabrasAcertadas: [],
            
            pushToPalabrasAcertadas : function (lletra, index) {
                this.palabrasAcertadas[index] = lletra;  
            },
            
            getPalabrasAcertadas : function () {
                return this.palabrasAcertadas;
            }
        };
        return object;
    });
}());
