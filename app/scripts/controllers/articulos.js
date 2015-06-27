'use strict';

/**
 * @ngdoc function
 * @name prototiposApp.controller:ArticulosCtrl
 * @description
 * # ArticulosCtrl
 * Controller of the prototiposApp
 */
angular.module('prototiposApp')
  .controller('ArticulosCtrl', function ($scope) {
    $scope.posts = [
      	{
      		title:"Alimentos buenos para la salud",
      		content: "Lorem ipsum dolor sit amet "
      	},
      	{
      		title: "Alimentos menos buenos para la salud",
      		content: "Lorem ipsum dolor sit amet"
      	},
      	{
      		title:"¡¡¡Limita tu cantidad de hidratos de carbono",
      		content: "Lorem ipsum dolor sit amet"
      	}
      	
    ];

    console.log('hola');
  });
