(function() {
    'use strict';
    angular.module('gameControllerModule',[])
    .controller('gameController', ['$scope', 'secretWord', 'svgPathFactory', '$location', function($scope, secretWord, svgPathFactory, $location) {

            /**
             * Store the punctuation of the player who has to guess the word.
             * @type {number}
             */
        $scope.points = 200;

            /**
             * Error count that will be displayed to the player.
             * @type {number}
             */
        $scope.numErrors = 0;

            /**
             * The max number of errors the player can make.
             * @const
             * @type {number}
             */
        var MAX_ERRORS = 7;

            /** Stores the secret word
             * @type {string}
             * */
        $scope.secretWord = secretWord.get();

            /** Store the character that has been guessed
             * @type {string}
             * */
        $scope.guessed = secretWord.getGuessedCharacters();

            /** Store the incorrect characters
             * @type {string[]}
             * */
        $scope.errors = [];

            /** Store the characters of the alphabet that we'll use to display in the view
             * @type {string[]}
             */
        $scope.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
            'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R',
            'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

            /**
             * Try a character, if is found inside the secret word the punctuation is
             * increased in 20 points. If it's not found, the character is added into
             * the errors container and a part of the man is drawn.
             *
             * If the number of errors is higher than the maximum allowed then we re-
             * direct to the game over view.
             * If the number of guessed characters is equal to the number of characters
             * that the secret word has, then the player guessed the word so we redirect
             * to the congratulations view.

             * @param character Character that the player choose through the graphic keyboard.
             * @param element Clicked button that contains the character. When it's clicked
             * it will become active and therefore it can not be pressed.
             */
        $scope.submitCharacter = function(character, element) {
            
            var found = findCharacter(character);
            
            if(element.active === undefined) {
                if(found) {
                    $scope.points += 20;
                } else {
                    pushError(character);
                    svgPathFactory.drawImagePath();
                }
                
                element.active = true;
            }
            
            if($scope.errors.length === MAX_ERRORS) {
                $location.url('/game/gameover');
            }
            
            if(areEquals($scope.secretWord, $scope.guessed)) {
                $location.url('/game/congratulations');
            }
        };

            /**
             * Check if the character that we search matches with any of the characters of the
             * word, if this is the case we add the character to the guessed characters with the
             * position that has inside the secret word so we can display it in the correct place.
             *
             * @private
             * @param character Character that we want to search in the word
             * @returns {boolean} True if the character was found, false if not.
             */
        var findCharacter = function(character) {
            var i;
            var found = false;
            
            for(i = 0; i < $scope.secretWord.length; i++) {
                if($scope.secretWord[i] === character.toLowerCase()) {
                    secretWord.pushGuessedCharacters(character,i);
                    found = true;
                }
            }
            return found;
        };

            /**
             * Adds a character to the errors container, increments the errors count and
             * decrease by 10 the player's points.
             *
             * @private
             * @param character Character to be added to the errors container.
             */
        var pushError = function(character) {
            $scope.errors.push(character);
            $scope.numErrors++;
            $scope.points -= 10;
        };

            /**
             * Compare if the secret word and the characters that we've tried have the same content
             * @param secretWord
             * @param guessedCharacters
             * @returns {boolean} True if they are equals, false if there's a character that it's not.
             */
        var areEquals = function(secretWord, guessedCharacters) {

            var equals = true;

            for(var i = 0; i < secretWord.length; i++) {
                if(guessedCharacters[i] == undefined || secretWord[i] !== guessedCharacters[i].toLowerCase()) {
                    equals = false;
                    break;
                }
            }

            return equals;
        };

            /** Refresh the browser */
        $scope.refresh = function() {
            location.reload();
        }
    }]);
}());
