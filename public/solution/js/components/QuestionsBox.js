var React            = require('react');
var QuestionsList    = require('./QuestionsList');
var Ribbon           = require('./lib/Ribbon');
var DividerComponent = require('./DividerComponent');
var QuestionForm     = require('./QuestionForm');
var classNames       = require('classnames');

var QuestionsBox = React.createClass({
    render: function() {
        var classn = classNames("questionsContainer", {hide: this.props.hidden});
        return (
            <div className={classn}>
                <Ribbon> Questions </Ribbon>
                <QuestionsList questions={this.props.questions} hideQuestions={this.props.hideQuestions}/>
                <DividerComponent />
                <QuestionForm task={this.props.task} />
            </div>
        );
    }
});

module.exports = QuestionsBox;