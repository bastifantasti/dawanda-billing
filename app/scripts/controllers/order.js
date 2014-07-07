'use strict';

/**
 * @ngdoc function
 * @name dawandaBillingApp.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the dawandaBillingApp
 */
angular.module('dawandaBillingApp')
    .controller('OrderCtrl', function ($scope, $http, Billingservice, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.generateBilling = function (item) {
            Billingservice.setCurrItem(item);
            console.log("item stored: ");
            console.log(Billingservice.getCurrItem());
            $location.path('/billing');
            // $window.location.href= "/#/billing";

        };

        $scope.orders = null;
        $http.get('getOrder.php')
            .success(function (data) {
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    data[i].betrag = data[i].cents / 100;
                    data[i].betrag = data[i].betrag.toFixed(2);
                    data[i].versandkosten = data[i].cents_shipping / 100;
                    data[i].versandkosten = data[i].versandkosten.toFixed(2);
                    data[i].gesamtbetrag = data[i].total_cents / 100;
                    data[i].gesamtbetrag = data[i].gesamtbetrag.toFixed(2);
                    var date = new Date(data[i].created_at);
                    data[i].newdate = date;
                }
                $scope.orders = data;

            });
    });
