var fs = require('fs');
var questions = require('../data/questions.json');

var tasks = require('./tasks');

function serialize(questions) {
    return Object.keys(questions.all).map(function (id) { return questions.all[id]; });
}

function save(questions, cb) {
    fs.writeFile('../data/questions.json', JSON.stringify(questions), cb);
}

function sendQuestions(socket) {
    console.log('sending questions');
    console.log(serialize(questions));
    socket.emit('questions:all', serialize(questions));
}


function validQuestion(q) {
    if ((typeof q.text === "undefined") ||
        (typeof q.taskId === "undefined") ||
        (typeof q.author === "undefined"))
        return false;
    if (!tasks.get(q.taskId))
        return false;
    return true;
}


function setupHandlers(io, socket) {

    socket.on('questions:new', function (question, finish) {
        if (!validQuestion(question)) {
            if (typeof finish === "function")
                return finish("malformed question");
            return;
        }

        question.id = questions.id++;
        questions.all.push(question);
        save(questions, function (err) {
            if (err) {
                console.log(err);
                if (typeof finish === "function")
                    return finish(err);
            }
            io.emit('questions:new', question);
            if (typeof finish === "function")
                finish(null, question.id);
        });
    });

}

module.exports = {
    send: sendQuestions,
    setupHandlers: setupHandlers
}