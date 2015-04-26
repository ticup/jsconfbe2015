var assign             = require('object-assign'); // Allows to transfer all properties of an object to another
var ChangeEventEmitter = require('../lib/ChangeEventEmitter');

var AppDispatcher      = require('../dispatcher');
var ActionTypes        = require('../constants/AppConstants').ActionTypes;

var hideQuestions = false;
var taskFilter = "";
var username = "";

var OptionStore = assign({}, ChangeEventEmitter, {

    getHideQuestions: function () {
        return hideQuestions;
    },

    getTaskFilter: function () {
        return taskFilter;
    },


    getUsername: function () {
        return username;
    }


});

OptionStore.dispatchToken = AppDispatcher.register(function (action) {

    switch (action.type) {
        case ActionTypes.HIDE_QUESTIONS_CHANGED:
            hideQuestions = action.value;
            OptionStore.emitChange();
            break;

        case ActionTypes.TASK_FILTER_CHANGED:
            taskFilter = action.filter;
            OptionStore.emitChange();
            break;

        case ActionTypes.USERNAME_CHANGED:
            username = action.username;
            console.log(username);
            OptionStore.emitChange();
            break;

        default:
    }
})

module.exports = OptionStore;