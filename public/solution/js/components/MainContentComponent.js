var React         = require('react');
var QuestionStore = require('../stores/QuestionStore');
var OptionStore   = require('../stores/OptionStore');
var TaskList      = require('./TaskList');

function getState() {
    return {
        questions    : QuestionStore.getAll(),
        hideQuestions: OptionStore.getHideQuestions(),
        taskFilter   : OptionStore.getTaskFilter()
    };
}

var MainContentComponent = React.createClass({
    getInitialState: function () {
        return getState();
    },
    componentDidMount: function () {
        QuestionStore.addChangeListener(this._onChange);
        OptionStore.addChangeListener(this._onChange);
    },
    _onChange: function () {
        this.setState(getState());
    },
    render: function() {
        var self = this;
        var tasks = [];
        this.props.tasks.forEach(function (task) {
            if (task.title.indexOf(self.state.taskFilter) !== -1)
                tasks.push(task);
        });
        return (
            <div>
                <p className="segment title">Make this page in React + Flux style.</p>
                <TaskList tasks={tasks}
                          questions={this.state.questions}
                          hideQuestions={this.state.hideQuestions}/>
            </div>
        );
    }
});

module.exports = MainContentComponent;