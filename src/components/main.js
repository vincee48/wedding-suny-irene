'use strict';

var App = require('./core/App');
var Home = require('./pages/Home');
var Story = require('./pages/Story');
var Photos = require('./pages/Photos');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

require('styles/vendor/normalize.less');
require('styles/vendor/skeleton.less');

var content = document.getElementById('body-content');

var Routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="story" handler={Story} />
    <Route name="photos" handler={Photos} />
	<DefaultRoute handler={Home} />
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
