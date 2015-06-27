'use strict';

/**
 * @ngdoc function
 * @name prototiposApp.controller:GaleriaCtrl
 * @description
 * # GaleriaCtrl
 * Controller of the prototiposApp
 */
angular.module('prototiposApp')
  .controller('GaleriaCtrl', function ($scope) {
    
    var pictures = $scope.pictures = [];

    var baseURL = "http://lorempixel.com/300/180/";

    var titles = ["Comida Sana", "Salud y Trabajo", "Vida en la cuidad",
    				"Mantente Activo","Cuida tu aspecto","¡¡Vida Nocturna!!"];
	
	var keywords=["food","business","city","sports","fashion",
					"nightlife"];

	var dummyText="Lorem ipsum dolor sit amet, consectetur";


	$scope.addPics = function(i){
		pictures.push({
			url:baseURL+keywords[i],
			title:titles[i],
			summary:dummyText
		});
	}

	for (var i = 0;i < 5;i++){
		$scope.addPics(i);
	}

  });
