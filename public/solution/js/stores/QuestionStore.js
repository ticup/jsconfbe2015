var assign             = require('object-assign'); // Allows to transfer all properties of an object to another
var ChangeEventEmitter = require('../lib/ChangeEventEmitter');

var AppDispatcher      = require('../dispatcher');
var ActionTypes        = require('../constants/AppConstants').ActionTypes;
var WebAPIUtils        = require('../utils/WebAPIUtils');


var questions = [];


function _addRawQuestions(raw_questions) {
    raw_questions.forEach(_addRawQuestion);
}

function _addRawQuestion(raw_question) {
    var question = WebAPIUtils.deserializeQuestion(raw_question);
    questions.push(question);
}

var QuestionStore = assign({}, ChangeEventEmitter, {


    getAll: function () {
        return questions;
    },

    filterByTask: function (questions, task) {
        var qs = [];
        questions.forEach(function (question) {
            if (question.taskId === task.id)
                qs.push(question);
        });
        return qs;
    }

});

QuestionStore.dispatchToken = AppDispatcher.register(function (action) {

    switch (action.type) {
        case ActionTypes.RECEIVE_ALL_QUESTIONS:
            _addRawQuestions(action.raw_questions);
            QuestionStore.emitChange();
            break;

        case ActionTypes.RECEIVE_NEW_QUESTION:
            _addRawQuestion(action.raw_question);
            QuestionStore.emitChange();
            break;

        default:
    }
});

module.exports = QuestionStore;