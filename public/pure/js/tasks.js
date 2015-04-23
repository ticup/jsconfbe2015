var comm      = require('./comm');
var Questions = require('./questions');

/*
    DOM ids
 */
var CONTAINER_ID        = '#taskList';
var TASK_SEARCH_ID      = '#taskSearchInput';
var SHOW_QUESTIONS_ID   = '#showQuestionsCheckbox';
var QUESTIONS_CONTAINER = '.questionsContainer';

/*
    Data
 */
var tasks = [];
var taskFilter = "";
var questionFilter = false;

function isFiltered(task) {
    return (taskFilter != "" && task.title.indexOf(taskFilter) === -1);
}

/*
    Display
 */

function clearTaskContainer() {
    $(CONTAINER_ID).empty();
}

function showTasks() {
    clearTaskContainer();
    tasks.forEach(addTask);
    var $firstTask = $(CONTAINER_ID).children().first();
    makeActive($firstTask);
}


function addTask(task) {
    var taskDOM = $(
        '<div id="Task-' + task.id + '" class="ui segment">' +
            '<div class="ui header title">' +
                 '<i class="pointing right icon"></i>' +
                task.title +
            '</div>' +

            '<div class="content hide">'+
                '<p>' + task.description + '</p>' +

                '<div class="ui divider"></div>' +

                '<div class="questionsContainer">' +
                '<a class="ui ribbon label"> Questions </a>' +
                '<div class="questions ui very relaxed list"></div>' +
                '<div class="ui divider"></div>' +
                '</div>' +

            '</div>' +
        '</div>')
        .appendTo(CONTAINER_ID);


    // Generate and add a form to create a question
    taskDOM.find('.questions').after(Questions.generateQuestionForm(task));

    // If we click a header we either open its content or close it, depending on its current state.
    taskDOM.find('.header').on('click', function () {
        var $taskNode = $(this.parentNode);
        if ($taskNode.hasClass('active'))
            makeInactive($taskNode);
        else
            makeActive($taskNode);
    });

}

// show content of this task node
function makeActive($taskNode) {
    var $header = $taskNode.children()
    $taskNode
        .addClass('active')
        .find('i')
            .removeClass('right')
            .addClass('down');
    $taskNode.find('.content').removeClass('hide');
}

// hide content of this task node.
function makeInactive($taskNode) {
    $taskNode
        .removeClass('active')
        .find('i')
            .removeClass('down')
            .addClass('right');
    $taskNode.find('.content').addClass('hide');

}


// hide tasks that are filtered out by the task search box.
function filterTasks() {
    tasks.forEach(function (task, idx) {
        var $el = $(CONTAINER_ID).children().eq(idx);
        if (isFiltered(task))
            $el.addClass('hide');
        else
            $el.removeClass('hide');
    });
}

// hide questions if the "Hide Questions" checkbox is checked.
function filterQuestions() {
    if (questionFilter)
        $(QUESTIONS_CONTAINER).addClass('hide');
    else
        $(QUESTIONS_CONTAINER).removeClass('hide');
}

/*
    Init
 */

$(function () {
    comm.on('tasks:all', function (new_tasks) {
        tasks = new_tasks;
        showTasks();
    });

    $(TASK_SEARCH_ID).on('keyup', function () {
        taskFilter = $(TASK_SEARCH_ID).val();
        console.log(taskFilter);
        filterTasks();
    });

    $(SHOW_QUESTIONS_ID).on('change', function () {
        questionFilter = this.checked;
        filterQuestions();
    });

    $('.ui.checkbox').checkbox();
});

module.exports = {
    getTaskQuestionsDOMId: function (id) {
        return '#Task-' + id + ' .questions';
    },
    getTaskAnswersDOMId: function (id) {
        return '#Task-' + id + ' .answers';
    }
};