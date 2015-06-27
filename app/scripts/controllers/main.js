'use strict';

/**
 * @ngdoc function
 * @name prototiposApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototiposApp
 */
angular.module('prototiposApp')
  .controller('MainCtrl', function ($scope) {
    
  	var baseURL = 'http://lorempixel.com/200/100/';
  	$scope.setInterval=5000;

    $scope.slides = [
     {
     	title:'Aprende a mantenerte en forma',
     	image:baseURL+'sports/',
     	text:'Practica Algún deporte todos los días'
     },
     {
     	title: 'Buena Alimentación',
     	image:baseURL+'food/',
     	text:'La importancia de frutas y verduras en la comida'
     },
     {
     	title: 'En contacto con la naturaleza',
     	image:baseURL+'nature/',
     	text:'Mantente En armonía con la naturaleza'
     }
    ];

     var baseURL2 = 'http://lorempixel.com/200/200/';

    $scope.contenido = [
    {
         img:baseURL2+'people',
        title:'Sobre Nosotros',
        summario:'Somos una empresa Comprometida con la vida sana'
    },
    {
        img:baseURL2+'business',
        title:'Nuestro Servicios',
        summario:'Ofrecemos asesoria profecional para mantenerse Sanos, buena alimentación'
    },
    {
        img:baseURL2+'transport',
        title:'Contáctanos',
        summario:'#333, buena vida Online,'
    }
       
    ];
  });
