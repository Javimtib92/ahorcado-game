'use strict';

describe('gameControllerModule module', function() {
  var scope, $location, gameController, palabraSecreta, svgPathFactory;
  
  beforeEach(module('gameControllerModule'));
  beforeEach(module('palabraSecretaModule'));
  beforeEach(module('svgPathModule'));
    
  describe('gameController', function(){

    beforeEach(inject(function($rootScope, $controller, _$location_,_palabraSecreta_, _svgPathFactory_) {
        
      $location = _$location_;
      palabraSecreta = _palabraSecreta_;
      svgPathFactory = _svgPathFactory_;
      scope = $rootScope.$new();
      
      gameController = function () {
        return $controller('gameController', {
            $scope : scope,
            palabraSecreta : palabraSecreta,
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
      scope.palabraSecreta = ['p','r','u','e','b','a'];
      scope.acertadas = palabraSecreta.getPalabrasAcertadas();
        
      // Test letra correcta
      scope.submitLetter('p', this);
      expect(scope.acertadas[0]).toEqual('p');
      
      // Test letra incorrecta
      scope.submitLetter('s', this);
      expect(scope.acertadas[1]).toBe(undefined);
      scope.$apply();
      console.log(scope.errors);
    });

  });
});