var React = require('react');

var CenterComponent = React.createClass({
    render: function () {
        return (
            <div className="ui one column page centered stackable grid">
                <div className="row">
                    <div className="column thirteen wide ui segment">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = CenterComponent;