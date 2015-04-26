var React = require('react');

var Ribbon = React.createClass({
    render: function() {
        return (
            <a className="ui ribbon label"> {this.props.children} </a>
        );
    }
});

module.exports = Ribbon;

