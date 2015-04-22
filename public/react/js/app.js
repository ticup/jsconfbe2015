var React            = require('react');
var comm             = require('./comm');
var WebAPI           = require('./utils/WebAPI');
var YourAppComponent = require('./components/YourAppComponent');

/*
    app.js: the main file of your client application.
 */


/*
    Setup communication with the server
 */
WebAPI.setupListeners();

/*
    TODO: Render the UI
 */