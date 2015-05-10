'use strict';

describe('App', function () {
  var React = require('react/addons');
  var ReactjsApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReactjsApp = require('components/Core/App.js');
    component = React.createElement(App);
  });

  it('should create a new instance of App', function () {
    expect(component).toBeDefined();
  });
});
