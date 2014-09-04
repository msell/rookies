'use strict';

describe('Directive: rosterDirective', function () {

  // load the directive's module
  beforeEach(module('rookiesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<roster-directive></roster-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the rosterDirective directive');
  }));
});
