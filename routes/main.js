var Questions = require('./questions.js');
var Tasks     = require('./tasks.js');

function setupConnection(io) {
    io.on('connection', function (socket) {
        Tasks.setupHandlers(io, socket);
        Questions.setupHandlers(io, socket);
        sendAll(socket);
    });
}

function sendAll(socket) {
    Tasks.send(socket);
    Questions.send(socket);
}

module.exports = setupConnection;
