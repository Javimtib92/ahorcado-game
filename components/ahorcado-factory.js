/**
 * Created by javier on 2/01/15.
 */
"use strict";
angular.module('ahorcadoFactory',[])
    .factory('appFactory', function() {
        var object = {
            palabraSecreta: "",
            setPalabraSecreta: function(palabraSecreta) {
                this.palabraSecreta = palabraSecreta;
            },
            getPalabraSecreta: function() {
                return this.palabraSecreta;
            }
        };
        return object;
    });