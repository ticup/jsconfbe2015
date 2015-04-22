/**
 * Created by ticup on 10/04/15.
 */
var tasks = require('../data/tasks.json');

function getTask(id) {
    return tasks[id];
}

function sendTasks(socket) {
    socket.emit('tasks:all', tasks);
}

function setupHandlers(io, socket) {

}

module.exports = {
    get: function (id) { return tasks[id]; },
    send: sendTasks,
    setupHandlers: setupHandlers
}
