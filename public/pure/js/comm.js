var socket = require('socket.io-client')();

function send(event, msg, callback) {
    socket.emit(event, msg, callback);
}

function on(event, callback) {
    socket.on(event, callback);
}


module.exports = {
    send: send,
    on: on
}