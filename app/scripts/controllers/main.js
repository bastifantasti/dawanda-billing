'use strict';

/**
 * @ngdoc function
 * @name dawandaBillingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dawandaBillingApp
 */
angular.module('dawandaBillingApp')
    .controller('MainCtrl', function ($scope, $http, parsecsv,Billingservice,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.billings;
        $scope.lasturl = localStorage.getItem("lasturl");
        $scope.generateBilling = function(item){
            Billingservice.setCurrItem(item);
            console.log("item stored: ");
            console.log(Billingservice.getCurrItem());
            $location.path('/billing');
           // $window.location.href= "/#/billing";

        };

        $scope.loadCsv = function () {
            console.log($('#csvfile').val());
            localStorage.setItem("lasturl", $('#csvfile').val());
            if ($('#csvfile').val()) {

                //'https://dawandaimages.s3.amazonaws.com/OrderCSV/2014-06-29/order/4528749-58cdac4816060757dc94bcf56d5d510e.csv'
                $http.get($('#csvfile').val()).then(function (result) {
                    // console.log(result.data);
                    var obj = parsecsv.csvJSON(result.data);
                    console.log(JSON.parse(obj));
                    $scope.billings = JSON.parse(obj);
                }, function (error) {
                    alert(error.message);
                });
            }
        };

    });
