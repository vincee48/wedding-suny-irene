'use strict';

var React = require('react/addons');
var ImagePin = require('./../ImagePin');

//var Actions = require('actions/xxx')

require('styles/pages/Home.less');

var Home = React.createClass({
	render: function () {

		return (
			<div className="Home">
				<div className="container">
                    <div className="row">
                        <ImagePin url={"/images/06.jpg"} solid={true} title={'17th May 2015'} colour='#fff'></ImagePin>
                    </div>
				</div>
			</div>
		);
	}
});

module.exports = Home;

