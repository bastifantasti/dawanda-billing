'use strict';

/**
 * @ngdoc function
 * @name dawandaBillingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dawandaBillingApp
 */
angular.module('dawandaBillingApp')
    .controller('ContactCtrl', function ($scope) {

        $("#headernav>li.active").removeClass("active");
        $("#contact").addClass("active");

    });
