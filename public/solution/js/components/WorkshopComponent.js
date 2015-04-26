var React = require('react');

var CenterComponent  = require('./CenterComponent');
var HeaderComponent  = require('./HeaderComponent');
var DividerComponent = require('./DividerComponent');
var ContentComponent = require('./ContentComponent');

var WorkshopComponent = React.createClass({
    render: function () {
        return (
            <CenterComponent>
                <HeaderComponent title="React + Flux Workshop" subTitle="JSConfBe"/>
                <DividerComponent />
                <ContentComponent tasks={this.props.tasks} />
            </CenterComponent>
        );
    }
});

module.exports = WorkshopComponent;