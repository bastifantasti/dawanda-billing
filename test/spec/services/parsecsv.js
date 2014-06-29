'use strict';

describe('Service: parsecsv', function () {

  // load the service's module
  beforeEach(module('dawandaBillingApp'));

  // instantiate service
  var parsecsv;
  beforeEach(inject(function (_parsecsv_) {
    parsecsv = _parsecsv_;
  }));

  it('should do something', function () {
    expect(!!parsecsv).toBe(true);
  });

});
