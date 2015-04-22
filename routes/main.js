var Questions = require('./questions.js');
var Answers   = require('./answers.js');
var Tasks     = require('./tasks.js');

function setupConnection(io) {
    io.on('connection', function (socket) {
        Tasks.setupHandlers(io, socket);
        Answers.setupHandlers(io, socket);
        Questions.setupHandlers(io, socket);
        sendAll(socket);
    });
}

function sendAll(socket) {
    Tasks.send(socket);
    Answers.send(socket);
    Questions.send(socket);
}

module.exports = setupConnection;
