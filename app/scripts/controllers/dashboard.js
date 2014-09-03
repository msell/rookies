'use strict';

/**
 * @ngdoc function
 * @name rookiesApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the rookiesApp
 */
angular.module('rookiesApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
