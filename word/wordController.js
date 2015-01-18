(function() {
    'use strict';
    angular.module('wordControllerModule',[])
    .controller('wordController', ['$scope', 'palabraSecreta', '$location', function($scope, palabraSecreta, $location) {

        var whiteSpaceRegExp = /^[a-zA-Z]+(\s+[a-zA-Z]?)?$/;
        
        $scope.insertarPalabraSecreta = function() {
            if(hasNoWhiteSpaces()) {
                palabraSecreta.set($scope.palabraSecreta);
                $location.path('/game');
            } else {
                errorLog();
            }
        };
        
        var hasNoWhiteSpaces = function() {
            return (whiteSpaceRegExp.test($scope.palabraSecreta));
        };
        
        var errorLog = function() {
            console.log('palabra contiene espacios');
        };
    }]);
}());