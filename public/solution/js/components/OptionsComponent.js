var React                = require('react');
var ClientActionCreators = require('../actions/ClientActionCreators');
var Field                = require('./lib/Field');

var OptionsComponent = React.createClass({
    _usernameChanged: function () {
        var username = React.findDOMNode(this.refs.username).value;
        ClientActionCreators.usernameChanged(username);
    },
    _hideQuestionsChanged: function () {
        var hideQuestions = $(React.findDOMNode(this.refs.hideQuestions)).is(':checked');
        ClientActionCreators.hideQuestionsChanged(hideQuestions);
    },
    _taskFilterChanged: function () {
        var taskFilter = React.findDOMNode(this.refs.taskFilter).value;
        ClientActionCreators.taskFilterChanged(taskFilter);
    },
    render: function() {
        return (

            <div className="ui form">
                <div className="three fields">

                    <Field >
                        <div className="user ui text input">
                            <input ref="username" onKeyUp={this._usernameChanged} type="text" placeholder="Enter Your Name..." />
                        </div>
                    </Field>

                    <Field>
                        <div className="ui left icon input">
                            <i className="search icon" />
                            <input ref="taskFilter" onKeyUp={this._taskFilterChanged} type="text" placeholder="Search Tasks..." />
                        </div>
                    </Field>

                    <Field>
                        <div className="ui checkbox">
                            <input id="hideQuestions" ref="hideQuestions" onChange={this._hideQuestionsChanged} type="checkbox" />
                            <label htmlFor="hideQuestions">
                                Hide Questions
                            </label>
                        </div>
                    </Field>
                </div>
            </div>
        );
    }
});

module.exports = OptionsComponent;