'use strict';

/**
 * @ngdoc function
 * @name dawandaBillingApp.controller:BillingCtrl
 * @description
 * # BillingCtrl
 * Controller of the dawandaBillingApp
 */
angular.module('dawandaBillingApp')
  .controller('BillingCtrl', function ($scope,Billingservice) {
    $scope.today = new Date();
    $scope.item = Billingservice.getCurrItem();
    $scope.item.created_at = new Date ($scope.item.created_at);
    console.log($scope.item);
  });
