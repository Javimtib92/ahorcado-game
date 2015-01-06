/**
 * Created by javier on 2/01/15.
 */
"use strict";
angular.module('appController',[])
    .controller('mainController', ['$scope', 'appFactory', '$location', function($scope, appFactory, $location) {

        $scope.palabraSecreta = appFactory.getPalabraSecreta();
        var spaceRegExp = /^[a-zA-Z]+(\s+[a-zA-Z]?)?$/;
        
        $scope.insertarPalabraSecreta = function() {
            if(spaceRegExp.test($scope.palabraSecreta)) {
                appFactory.setPalabraSecreta($scope.palabraSecreta);
                $location.path('/game');
            } else {
                console.log("palabra contiene espacios");
            }
        }
    }]);