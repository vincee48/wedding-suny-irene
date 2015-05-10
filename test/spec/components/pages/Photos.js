'use strict';

describe('Photos', function () {
  var React = require('react/addons');
  var Photos, component;

  beforeEach(function () {
    Photos = require('components/pages/Photos.js');
    component = React.createElement(Photos);
  });

  it('should create a new instance of Photos', function () {
    expect(component).toBeDefined();
  });
});
