'use strict';

var React = require('react/addons');

//var Actions = require('actions/xxx')

require('styles/ImagePin.less');

var ImagePin = React.createClass({

    render: function () {

        var imgClass = 'u-max-full-width';
        if (this.props.solid) {
            imgClass += ' solid';
        } else {
            imgClass += ' opaque';
        }

        var title;
        if (this.props.title) {
            title = <div className="title">{this.props.title}</div>;
        }

        var style = {
            backgroundColor: this.props.colour
        };

        return (
            <div>
                <div className="image-pin-wrapper" style={style}>
                    <img src={this.props.url} className={imgClass} />
                    {title}
                </div>
                <div className="image-pin-break"></div>
            </div>
        );
    }
});

module.exports = ImagePin;

