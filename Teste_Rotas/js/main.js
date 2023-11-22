var teste = angular.module("teste",["ngRoute"])

teste.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "./templates/T1.html",
    })
    .when("/usuarios", {
        templateUrl : "./templates/T2.html",
      })
  });