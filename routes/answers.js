var fs = require('fs');
var tasks = require('./tasks');

var answers = require('../data/answers.json');


function getAnswer(id) {
    return answers.all[id];
}

function serialize(answers) {
    return Object.keys(answers.all).map(function (id) { return answers.all[id]; });
}

function save(answers, cb) {
    fs.writeFile('../data/answers.json', JSON.stringify(answers), cb);
}

function sendAnswers(socket) {
    console.log('sending answers');
    console.log(serialize(answers));
    socket.emit('answers:all', serialize(answers));
}


function validAnswer(answer) {
    if ((typeof answer.text === "undefined") ||
        (typeof answer.taskId === "undefined") ||
        (typeof answer.author === "undefined"))
        return false;
    if (!tasks.get(answer.taskId))
        return false;
    return true;
}




function setupHandlers(io, socket) {

    socket.on('answers:new', function (answer, finish) {
        console.log('received answer: ' + answer);
        if (!validAnswer(answer)) {
            if (typeof finish === "function")
                return finish("malformed answer");
            return;
        }
        console.log('validated');
        answer.id = answers.id++;
        answer.visible = false;
        answer.accepted = false;
        answers.all.push(answer);
        save(answers, function (err) {
            if (err) {
                console.log(err);
                return finish(err);
            }
            socket.emit('answers:new', answer);
            if (typeof finish === "function")
                finish(null, answer.id);
        });
    });

    socket.on('answers:visible', function (data, finish) {
        if (!users.isAdmin(socket)) {
            return finish("unauthorized");
        }
        if (typeof data.id === "undefined") {
            return finish("malformed answer");
        }
        var answer = getAnswer(data.id);
        answer.visible = true;
        socket.emit('answers:visible', answer);
        finish(null, answer.id);
    });

    socket.on('answers:accept', function (data, finish) {
        if (!users.isAdmin(socket)) {
            return finish("unauthorized");
        }
        if (typeof data.id === "undefined") {
            return finish("malformed answer");
        }
        var answer = getAnswer(data.id);
        answer.visible = true;
        answer.accepted = true;
        socket.emit('answers:accept', answer);
        finish(null, answer.id);
    });

}

module.exports = {
    send: sendAnswers,
    setupHandlers: setupHandlers
}