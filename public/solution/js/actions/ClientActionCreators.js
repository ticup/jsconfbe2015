var ActionTypes = require('../constants/AppConstants').ActionTypes;
var Dispatcher  = require('../dispatcher');
var WebApi      = require('../utils/WebAPI');
/*
    It's up to you to decide how you want to manage your action creators.
    Here I chose to keep client and server actions separate.
    If your application is bigger, you can for example have an ActionCreator for every domain.
 */

module.exports = {
    /*
        Options
     */
    hideQuestionsChanged: function (value) {
        Dispatcher.dispatch({
            type: ActionTypes.HIDE_QUESTIONS_CHANGED,
            value: value
        });
    },

    taskFilterChanged: function (filter) {
        Dispatcher.dispatch({
            type: ActionTypes.TASK_FILTER_CHANGED,
            filter: filter
        });
    },

    usernameChanged: function (username) {
        Dispatcher.dispatch({
            type: ActionTypes.USERNAME_CHANGED,
            username: username
        });
    },

    createQuestion: function (author, taskId, question) {
        Dispatcher.dispatch({
            type: ActionTypes.CREATE_NEW_QUESTION,
            question: question,
            author: author,
            taskId: taskId
        });
        WebApi.createQuestion(author, taskId, question);

    }
};