(function() {
    'use strict';
    angular.module('wordControllerModule',[])
    .controller('wordController', ['$scope', 'palabraSecreta', '$location', function($scope, palabraSecreta, $location) {

            /**
             * Expressió regular per una paraula sense espais
             * @private
             * @type {RegExp}
             */
        var noWhiteSpaceRegExp = /^[a-zA-Z]+(\s+[a-zA-Z]?)?$/;

            /**
             * Implementa la funcionalidad per inserir una paraula secreta.
             * Si la paraula no conté espais la insereix i redirecciona a la
             * següent vista. Si en té llança un error.
             */
        $scope.insertarPalabraSecreta = function() {
            if(hasNoWhiteSpaces($scope.palabraSecreta)) {
                palabraSecreta.set($scope.palabraSecreta);
                $location.path('/game');
            } else {
                errorLog();
            }
        };

            /**
             * Comprova que la paraula secreta no conté espais en blanc
             * @private
             * @returns {boolean}
             */
        var hasNoWhiteSpaces = function(paraula) {
            return (noWhiteSpaceRegExp.test(paraula));
        };

            /**
             * Error a mostrar si la paraula conté espais en blanc
             */
        var errorLog = function() {
            console.log('palabra contiene espacios');
        };
    }]);
}());