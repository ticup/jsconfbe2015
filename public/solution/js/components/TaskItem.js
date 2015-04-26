var React            = require('react');
var QuestionsBox     = require('./QuestionsBox');
var classNames       = require('classnames');

var TaskItem = React.createClass({
    getInitialState: function () {
        return {active: false}
    },
    _onClick: function () {
        this.setState({active: !this.state.active});
    },
    render: function() {
        var taskClass    = classNames("ui", "segment", {active: this.state.active});
        var iClass       = classNames("pointing", {down: this.state.active, right: !this.state.active}, "icon");
        var contentClass = classNames("content", {hide: !this.state.active});

        return (
            <div id={'Task-' + this.props.task.id} className={taskClass}>
                <div className="ui header title" onClick={this._onClick}>
                    <i className={iClass}></i>
                    {this.props.task.title}
                </div>

                <div className={contentClass}>
                    <p dangerouslySetInnerHTML={{__html: this.props.task.description}} />

                    <div className={contentClass}></div>

                    <QuestionsBox task={this.props.task} questions={this.props.questions} hidden={this.props.hideQuestions} />
                </div>
            </div>
        );
    }
});

module.exports = TaskItem;