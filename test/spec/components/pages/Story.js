'use strict';

describe('Story', function () {
  var React = require('react/addons');
  var Story, component;

  beforeEach(function () {
    Story = require('components/pages/Story.js');
    component = React.createElement(Story);
  });

  it('should create a new instance of Story', function () {
    expect(component).toBeDefined();
  });
});
