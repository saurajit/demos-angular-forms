'use strict';

describe('Controller: NestedformsCtrl', function () {

  // load the controller's module
  beforeEach(module('angularFormsApp'));

  var NestedformsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NestedformsCtrl = $controller('NestedformsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
