'use strict';

var React = require('react/addons');
var ImagePin = require('./../ImagePin');

//var Actions = require('actions/xxx')

require('styles/pages/Photos.less');

var images = [
    {
        key: 1,
        url: '/images/01.jpg',
        colour: '#6a76da',
        opened: false
    },
    {
        key: 2,
        url: '/images/02.jpg',
        colour: '#0d0',
        opened: false
    },
    {
        key: 3,
        url: '/images/03.jpg',
        colour: '#f00',
        opened: false
    },
    {
        key: 4,
        url: '/images/04.jpg',
        colour: '#00f',
        opened: false
    },
    {
        key: 5,
        url: '/images/05.jpg',
        colour: '#dd0',
        opened: false
    },
    {
        key: 6,
        url: '/images/06.jpg',
        colour: '#ad6da7',
        opened: false
    },
    {
        key: 7,
        url: '/images/07.jpg',
        colour: '#f3f3f3',
        opened: false
    },
    {
        key: 8,
        url: '/images/08.jpg',
        colour: '#00a',
        opened: false
    }
];

var Photos = React.createClass({
    getInitialState: function () {
        return {
            images: images
        };
    },
    handleClick: function(event) {
        console.log(event);
    },
    render: function () {

        return (
            <div className="Photos">
                <div className="row image-list">
                    {this.state.images.map(function(image) {
                            return (
                                <div onClick={this.handleClick(image)} key={image.key}>
                                    <ImagePin url={image.url} colour={'#fff'}></ImagePin>
                                </div>
                            );
                    }, this)}
                </div>
            </div>
        );
    }
});

module.exports = Photos;

