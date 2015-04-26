var React                 = require('react');
var OptionsComponent      = require('./OptionsComponent');
var MainContentComponent  = require('./MainContentComponent');
var DividerComponent      = require('./DividerComponent');

var ContentComponent = React.createClass({
    render: function () {
        return (
            <div className="content ui left aligned">
                <OptionsComponent />
                <DividerComponent />
                <MainContentComponent tasks={this.props.tasks}/>
            </div>
        );
    }
});

module.exports = ContentComponent;