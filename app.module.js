(function() {
    'use strict';

    /**
     * Carrega tots els moduls necessaris per el programa
     */

    angular.module('ahorcadoGame',[
        'ngRoute',
        'appRoutesModule',
        'wordControllerModule',
        'gameControllerModule',
        'palabraSecretaModule',
        'svgPathModule',
        'gameDirectiveModule'
    ]);
}());