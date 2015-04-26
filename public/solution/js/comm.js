var socket = require('socket.io-client')();

/*
    comm.js: Simple lib that abstracts over the socket communication and connects to the server.
 */

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