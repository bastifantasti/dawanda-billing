'use strict';

/**
 * @ngdoc service
 * @name dawandaBillingApp.parsecsv
 * @description
 * # parsecsv
 * Factory in the dawandaBillingApp.
 */
angular.module('dawandaBillingApp')
    .factory('parsecsv', function () {
        // Service logic

        // Public API here
        /**
         * splitCSV function (c) 2009 Brian Huisman, see http://www.greywyvern.com/?post=258
         * Works by spliting on seperators first, then patching together quoted values
         */
        String.prototype.splitCSV = function (sep) {
            for (var foo = this.split(sep = sep || ","), x = foo.length - 1, tl; x >= 0; x--) {
                if (foo[x].replace(/"\s+$/, '"').charAt(foo[x].length - 1) == '"') {
                    if ((tl = foo[x].replace(/^\s+"/, '"')).length > 1 && tl.charAt(0) == '"') {
                        foo[x] = foo[x].replace(/^\s*"|"\s*$/g, '').replace(/""/g, '"');
                    } else if (x) {
                        foo.splice(x - 1, 2, [foo[x - 1], foo[x]].join(sep));
                    } else foo = foo.shift().split(sep).concat(foo);
                } else foo[x].replace(/""/g, '"');
            }
            return foo;
        };

        return {
            getCSV: function (url) {
                $http.get('http://www.iNorthwind.com/Service1.svc/getAllCustomers')
                    .success(function (data) {
                        $scope.listOfCustomers = data;
                    })
                    .error(function (data, status, headers, config) {
                        //  Do some error handling here
                    });
            },
            csvJSON: function (csv) {
                var lines = csv.split("\n");
                console.log(lines);
                var result = [];

                var headers = lines[0].split(",");

                for (var i = 1; i < lines.length; i++) {

                    var obj = {};
                    var currentline = lines[i].splitCSV();
                    for (var j = 0; j < headers.length; j++) {
                        obj[headers[j]] = currentline[j];
                    }

                    result.push(obj);

                }

                //return result; //JavaScript object
                return JSON.stringify(result); //JSON
            }
        };
    });
