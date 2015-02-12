'use strict';

describe('gameControllerModule module', function() {
  var scope, $location, gameController, secretWord, svgPathFactory;
  
  beforeEach(module('gameControllerModule'));
  beforeEach(module('secretWordModule'));
  beforeEach(module('svgPathModule'));
    
  describe('gameController', function(){

    beforeEach(inject(function($rootScope, $controller, _$location_,_secretWord_, _svgPathFactory_) {
        
      $location = _$location_;
      secretWord = _secretWord_;
      svgPathFactory = _svgPathFactory_;
      scope = $rootScope.$new();
      
      gameController = function () {
        return $controller('gameController', {
            $scope : scope,
            secretWord : secretWord,
            svgPathFactory: svgPathFactory
        });
      }
      
    }));
      
    //spec body
      
    it('should be defined', function() {
        expect(gameController).toBeDefined();
    });
      
    it('should have a method to submit a letter', function() {
      var controller = gameController();
      scope.secretWord = ['p','r','u','e','b','a'];
      scope.guessed = secretWord.getGuessedCharacters();
        
      // Test letra correcta
      scope.submitCharacter('p', this);
      expect(scope.guessed[0]).toEqual('p');
      
      // Test letra incorrecta
      scope.submitCharacter('s', this);
      expect(scope.guessed[1]).toBe(undefined);
      scope.$apply();
      console.log(scope.errors);
    });

  });
});