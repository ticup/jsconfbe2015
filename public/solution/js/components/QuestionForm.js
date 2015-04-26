var React                = require('react');
var ClientActionCreators = require('../actions/ClientActionCreators');
var OptionStore          = require('../stores/OptionStore');

var TaskQuestionForm = React.createClass({
    submitTaskQuestion: function (e) {
        e.preventDefault();
        var question = React.findDOMNode(this.refs.question).value;
        ClientActionCreators.createQuestion(OptionStore.getUsername(), this.props.task.id, question);
    },
    render: function () {
        return (
            <form className="ui form" onSubmit={this.submitTaskQuestion}>
                <div className="fields">
                    <div className="twelve wide field">
                        <input name="question" ref="question" className="ui text input" type="text" placeholder="Enter Question..." />
                    </div>
                    <div className="four wide field">
                        <button className="ui submit primary button">Ask!</button>
                    </div>
                </div>
            </form>
        );
    }
});

module.exports = TaskQuestionForm;