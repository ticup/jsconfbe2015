var Dispatcher   = require('../dispatcher');
var ActionTypes  = require('../constants/AppConstants').ActionTypes;
var WebAPI       = require('../utils/WebAPI');

/*
    actions/ActionCreators.js: Exposes an API to create and dispatch actions into the system.
 */

module.exports = {
    receiveAllQuestions: function (questions) {
        Dispatcher.dispatch({
            type: ActionTypes.RECEIVE_ALL_QUESTIONS,
            raw_questions: questions
        });
    },

    receiveNewQuestion: function (question) {
        Dispatcher.dispatch({
            type: ActionTypes.RECEIVE_NEW_QUESTION,
            raw_question: question
        });
    }
};