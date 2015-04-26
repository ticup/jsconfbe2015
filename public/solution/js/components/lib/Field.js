var React = require('react');

var Field = React.createClass({
    render: function() {
        return (
            <div className="inline field">
                {this.props.children}
            </div>
        );
    }
});

module.exports = Field;

