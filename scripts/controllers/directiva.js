angular
  .module('app')
  .controller('CtrlDirectiva', function($scope, data, i18nService, uiGridConstants, factoryConServicioBanderas) {
    $scope.titulo = "Directivas Test";
    $scope.listadoBanderas = [];
    factoryConServicioBanderas.TraerTodos().then(function(rta){
    // Cargo los datos en la grilla.
     $scope.listadoBanderas = rta;
   });
  })
