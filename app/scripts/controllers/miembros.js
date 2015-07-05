'use strict';

/**
 * @ngdoc function
 * @name prototiposApp.controller:MiembrosCtrl
 * @description
 * # MiembrosCtrl
 * Controller of the prototiposApp
 */
angular.module('prototiposApp')
  .controller('MiembrosCtrl', function ($scope, $http, $modal) {
    
    $http.get('http://localhost:9000/miembros.json').success(function(data){
    	$scope.miembros = data;
    });

    $scope.gridOptions = {
    	data: 'miembros',
        showGroupPanel: true,
        enableCellSelection: true,
        enableRowSelection: false,
        enableCellEdit: true,
    	columnDefs: [
    		{field: 'no', displayName: 'N°.'},
    		{field: 'nombre', displayName: 'Nombre'},
    		{field: 'fidelidad', displayName: 'Puntos Fidelidad'},
    		{field: 'fechaUnion', displayName: 'Fecha de Union'},
    		{field: 'tipoMiembro', displayName: 'Tipo de Miembro'}
    	]
    };

    $scope.showModal=function(){
        $scope.nuevoMiembro={};
        var modalInstance = $modal.open({
            templateUrl: 'views/add-miembros.html',
            controller: 'AddNuevoMiembroCtr',
                resolve: {
                    nuevoMiembro: function() {
                        return $scope.nuevoMiembro;
                    }
                }
        });

        modalInstance.result.then(function (selectItem){
            $scope.miembros.push({
                no: $scope.miembros.length + 2,
                nombre: $scope.nuevoMiembro.nombre,
                fedelidad: $scope.nuevoMiembro.fidelidad,
                fechaUnion: $scope.nuevoMiembro.fechaUnion,
                tipoMiembro: $scope.nuevoMiembro.tipoMiembro
            });
            console.log($scope.miembros);
        });
        
    };


  })

  .controller('AddNuevoMiembroCtr', function($scope,$modalInstance, nuevoMiembro){
        $scope.nuevoMiembro = nuevoMiembro;
        $scope.salvarNuevoMiembro = function(){
           $modalInstance.close(nuevoMiembro);
          console.log('holamundo');
        };

        $scope.cancel = function(){
            $modalInstance.dismiss('cancel');
        };
  });
