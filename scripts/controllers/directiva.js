angular
  .module('app')
  .controller('CtrlDirectiva', function($scope, data, i18nService, uiGridConstants) {
    $scope.titulo = "Directivas Test";
    $scope.listadoBanderas = [];
  })
