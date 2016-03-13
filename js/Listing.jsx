'use strict';

var React       = require("react"),
    Bootstrap   = require("react-bootstrap"),
    Button      = Bootstrap.Button;

var Listing = React.createClass({
    render: function() {
        var sideClass = this.props.left ? 'left' : 'right';

        var icon = (
            <div className="icon">
                <img src={this.props.img}/>
            </div>
        );

        var text = (
            <div className="content">
                <div className="title">{this.props.title}</div>
                <div className="text">{this.props.text}</div>
                <div className="button">
                    <Button bsStyle="info">More <span className="fa fa-external-link"></span></Button>
                </div>
            </div>
        );

        var left, right;
        if(this.props.left) {
            left = icon;
            right = text;
        }
        else {
            left = text;
            right = icon;
        }

        return (
            <div className={"listing " + sideClass}>
                <div className="bg"></div>
                {left}{right}
            </div>
        );
    }
});

module.exports = Listing;
