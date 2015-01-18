(function() {
    'use strict';
    angular.module('gameDirectiveModule',[])
        .directive('character', function() {
            return {
                restrict:'A',
                scope: {
                    submit: '&',
                    text: '='
                },
                template: 
                   '<a class="char btn btn-default"' +
                      'ng-class="{active : active == true}"' +
                      'ng-click="submit(); active = true">{{text}}</a>'
            };
        })
        .directive('letrasDescubiertas', function() {
    
            return {
                restrict:'E',
                scope: {
                    palabra:'='
                },
                controller: function($scope, palabraSecreta) {
                    $scope.letrasAcertadas = palabraSecreta.getPalabrasAcertadas();
                },
                template: 
                    '<div class="dash" ng-repeat="letra in palabra track by $index">' +
                        '<div>{{letrasAcertadas[$index]}}</div>' +
                    '</div>'
            };
        })
        .directive('gameImage', function() {
            return {
                restrict:'A',
                scope: {
                    text: '='
                },
                controller: function($scope, svgPathFactory) {
                    $scope.pathsFilled = svgPathFactory.get();
                },
                template: 
                    '<div class="ahorcado-img col-md-7">' +
                        '<svg xmlns:dc="http://purl.org/dc/elements/1.1/"' +
                             'xmlns:cc="http://creativecommons.org/ns#"' +
                             'xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"' +
                             'xmlns:svg="http://www.w3.org/2000/svg"' +
                             'xmlns="http://www.w3.org/2000/svg"' +
                             'xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"' +
                             'xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"' +
                             'version="1.1"' +
                             'width="550"' +
                             'height="300"' +
                             'id="svg3106"' +
                             'inkscape:version="0.48.4 r9939"' +
                             'sodipodi:docname="ahorcado-3.svg">' +
                            '<g transform="matrix(0.63447079,0,0,0.56712773,79.079225,9.8992451)"' +
                               'id="layer1"' +
                               'style="fill:#808080">' +
                                '<path class="{{path.class}}" ng-repeat="path in pathsFilled" d="{{path.d}}"></path>' +
                            '</g>' +
                        '</svg>' +
                    '</div>'
            };
        });
}());
