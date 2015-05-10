'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;

//var Actions = require('actions/xxx')

require('styles/core/Header.less');

var Header = React.createClass({

  render: function () {
    return (
        <header className="row">
            <div className="background-left"></div>
            <div className="background-right"></div>
        	<div className="container">
	        	<div className="row logo">
	        		<span className="logo-text">Suny & Irene</span>
	        	</div>
	        	<div className="row nav">
					<ul>
						<li><Link to="app">HOME</Link></li>
						<li><Link to="photos">PHOTOS</Link></li>
					</ul>
				</div>
			</div>
        </header>
      );
  }
});

module.exports = Header;

