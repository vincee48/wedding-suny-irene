'use strict';

describe('ImagePin', function () {
  var React = require('react/addons');
  var ImagePin, component;

  beforeEach(function () {
    ImagePin = require('components/ImagePin.js');
    component = React.createElement(ImagePin);
  });

  it('should create a new instance of ImagePin', function () {
    expect(component).toBeDefined();
  });
});
