var Dispatcher           = require('../dispatcher');
var ServerActionCreators = require('../actions/ServerActionCreators');
var comm                 = require('../comm');

/*
    utils/WebAPI: Exposes methods that directly handle communication with the web server.
 */

module.exports = {
    setupListeners: function () {
        comm.on('questions:all', function (new_questions) {
            console.log('recieved questions');
            ServerActionCreators.receiveAllQuestions(new_questions);
        });

        comm.on('questions:new', function (new_question) {
            console.log('received new question');
            ServerActionCreators.receiveNewQuestion(new_question);
        });
    },

    createQuestion: function (author, taskId, question) {
        comm.send('questions:new', {
            author: author,
            text  : question,
            taskId: taskId
        });
    }
};