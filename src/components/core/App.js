'use strict';

var Header = require('./Header');
var Footer = require('./Footer');
var React = require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

// CSS
require('normalize.css');
require('styles/main.less');

var App = React.createClass({
  render: function() {
    return (
		<div>
			<Header/>

			<div className="content row">
				<RouteHandler/>
			</div>

			<Footer/>
		</div>
    );
  }
});

module.exports = App;
