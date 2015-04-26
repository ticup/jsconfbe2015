var React          = require('react');
var TaskItem       = require('./TaskItem');
var QuestionStore  = require('../stores/QuestionStore');


var TaskList = React.createClass({
    render: function() {
        var self = this;
        var tasks = this.props.tasks.map(function (task) {
            return <TaskItem key={task.id}
                             task={task}
                             questions={QuestionStore.filterByTask(self.props.questions, task)}
                             hideQuestions={self.props.hideQuestions}/>;
        });
        return (
            <div id="TaskList">
                {tasks}
            </div>
        );
    }
});

module.exports = TaskList;