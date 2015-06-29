'use strict';

/**
 * @ngdoc function
 * @name prototiposApp.controller:MiembrosCtrl
 * @description
 * # MiembrosCtrl
 * Controller of the prototiposApp
 */
angular.module('prototiposApp')
  .controller('MiembrosCtrl', function ($scope, $http) {
    
    $http.get('http://localhost:9000/miembros.json').success(function(data){
    	$scope.miembros = data;
    })

    $scope.gridOptions = {
    	data: 'miembros'
    };
  });
