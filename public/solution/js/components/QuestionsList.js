var React = require('react');

var QuestionItem = require('./QuestionItem');

var QuestionsList = React.createClass({
    render: function() {
        var questions = this.props.questions.map(function (question) {
            return <QuestionItem key={question.id} question={question.text} author={question.author}/>;
        });
        return (
            <div className="questions ui very relaxed list">
                {questions}
            </div>
        );
    }
});

module.exports = QuestionsList;

