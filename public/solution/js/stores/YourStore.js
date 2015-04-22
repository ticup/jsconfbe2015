var assign             = require('object-assign'); // Allows to transfer all properties of an object to another
var ChangeEventEmitter = require('../lib/ChangeEventEmitter');

var AppDispatcher      = require('../dispatcher');
var ActionTypes        = require('../constants/AppConstants').ActionTypes;

/*
    stores/YouStore.js: Contains all the data + logic of certain domain of your application.
    It registers itself with the dispatcher to act upon actions and exposes an API for the components
    to get the data and subscribe for changes on the data.
 */


/*
    TODO: Internal data for this domain and manipulation thereof come here as module-private.
    These are just variables and functions, which are local to this module, but which can be accessed from within
    the YourStore methods through lexical scoping.
 */


var YourStore = assign({}, ChangeEventEmitter, {
    /*
         TODO: External API that exposes the internal data for Views (using lexical scoping).
         Remember: only getters are "allowed" here!
     */


    /*
        Registers a callback with the dispatcher to act upon dispatched actions, perform your data manipulations here.
        Exposes a dispatchToken, which can be used by other stores in combination with the "AppDispatcher.waitFor(token)"
        function. This makes sure that the action is first completely handled by the store of given token before continuing.
     */
    dispatchToken: AppDispatcher.register(function (action) {

        /*
            TODO: act upon the actions that are relevant to this store.
             Perform the necessary updates on the internal data and notify the views that the data has changed.
         */
        switch (action.type) {
            case ActionTypes.YOUR_ACTION:
                break;

            default:
        }
    }

});

module.exports = YourStore;