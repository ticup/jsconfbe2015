var comm     = require('./comm');
var username = require('./username');

/*
    Data
 */
var answers = [];


/*
    Actions
 */

function submitTaskAnswer(task, answer) {
    comm.send('answers:new', {
        author: username.get(),
        text  : answer,
        taskId: task.id,
        date  : new Date()
    });
}


/*
    Display
 */

function showAnswers() {
    answers.forEach(showAnswer);
}

function showAnswer(answer) {
    $('<li><p>' + (answer.author ? answer.author : 'Anonymous') + ': ' + answer.text + '</p></li>')
        .appendTo($(require('./tasks').getTaskAnswersDOMId(answer.taskId)));
}

function generateAnswerForm(task) {
    return (
        $('<form class="ui form">' +
            '<div class="fields">' +
            '<div class="twelve wide field">' +
            '<input name="answer" class="ui text input" type="text" placeholder="Enter Answer...">' +
            '</div>' +
            '<div class="four wide field">' +
            '<button class="ui submit primary button">Answer!</button>' +
            '</div>' +
            '</div>' +
        '</form>')
            .on('submit', function (e) {
                e.preventDefault();
                submitTaskAnswer(task, this.elements.answer.value, username.get());
            }));
}



/*
    Helpers
 */

function deserializeAnswer(answer) {
    answer.date = new Date(answer.date);
}
function serializeAnswer(answer) {
    answer.date = answer.date.toString();
}

/*
    Init
 */

$(function () {
    comm.on('answers:all', function (new_answers) {
        console.log('recieved answers');
        answers.forEach(deserializeAnswer);
        answers = new_answers;
        showAnswers();
    });

    comm.on('answers:new', function (new_answer) {
        console.log('received new answer');
        deserializeAnswer(new_answer);
        answers.push(new_answer);
        showAnswer(new_answer);
    });
});


module.exports = {
    generateAnswerForm: generateAnswerForm
};