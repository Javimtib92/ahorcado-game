(function() {
    'use strict';
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