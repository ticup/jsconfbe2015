var Dispatcher   = require('../dispatcher');
var ActionTypes  = require('../constants/AppConstants').ActionTypes;
var WebAPI       = require('../utils/WebAPI');

/*
    actions/ActionCreators.js: Exposes an API to create and dispatch actions into the system.
 */

module.exports = {
    /*
        TODO: add methods that create and dispatch the actions of your system.
        Use the respective action types that you declare in constants/AppConstants.js
        so that stores know which type of action is being dispatched.
     */
    createAnAction: function () {
        Dispatcher.dispatch({
            type: ActionTypes.YOUR_ACTION,
            data: "some data attached to this action"
        });
    }
};