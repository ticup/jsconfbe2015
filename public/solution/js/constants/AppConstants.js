var keyMirror = require('react/lib/keyMirror');

/*
    constants/AppConstants.js: all the app-shared constants come here
 */

module.exports = {
    ActionTypes: keyMirror({
        USERNAME_CHANGED: null,
        HIDE_QUESTIONS_CHANGED: null,
        TASK_FILTER_CHANGED: null,

        RECEIVE_ALL_QUESTIONS: null,
        RECEIVE_NEW_QUESTION: null,

        CREATE_NEW_QUESTION: null
    })
};