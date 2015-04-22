var comm     = require('./comm');
var username = require('./username');

/*
    Data
 */
var questions = [];

/*
    Actions
 */

function submitTaskQuestion(task, question) {
    comm.send('questions:new', {
        author: username.get(),
        text  : question,
        taskId: task.id
    });
}

/*
    Display
 */
function showQuestions() {
    console.log(questions);
    questions.forEach(showQuestion);
}

function showQuestion(question) {
    $('<li><p>' + (question.author ? question.author : 'Anonymous') + ': ' + question.text + '</p></li>')
        .appendTo($(require('./tasks').getTaskQuestionsDOMId(question.taskId)));
}

function generateQuestionForm(task) {
    return (
        $(
    '<form class="ui form">' +
        '<div class="fields">' +
        '<div class="twelve wide field">' +
        '<input name="question" class="ui text input" type="text" placeholder="Enter Question...">' +
        '</div>' +
        '<div class="four wide field">' +
        '<button class="ui submit primary button">Ask!</button>' +
        '</div>' +
        '</div>' +
    '</form>')
        .on('submit', function (e) {
                e.preventDefault();
                submitTaskQuestion(task, this.elements.question.value, username.get());
            }));
}

/*
    Helpers
 */
function deserializeQuestion(question) {
    question.date = new Date(question.date);
}


/*
    Init
 */
$(function () {
    comm.on('questions:all', function (new_questions) {
        console.log('recieved questions');
        new_questions.forEach(deserializeQuestion);
        questions = new_questions;
        showQuestions();
    });

    comm.on('questions:new', function (new_question) {
        console.log('received new question');
        deserializeQuestion(new_question);
        questions.push(new_question);
        showQuestion(new_question);
    });
});



module.exports = {
    generateQuestionForm: generateQuestionForm
};