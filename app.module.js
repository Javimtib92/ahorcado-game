(function() {
    'use strict';

    /**
     * Load all the modules necessary for the program.
     */

    angular.module('ahorcadoGame',[
        'ngRoute',
        'appRoutesModule',
        'wordControllerModule',
        'gameControllerModule',
        'secretWordModule',
        'svgPathModule',
        'gameDirectiveModule'
    ]);
}());