var React            = require('react');
var comm             = require('./comm');
var WebAPI           = require('./utils/WebAPI');
var WorkshopComponent= require('./components/WorkshopComponent');
var tasks            = require('../../../data/tasks.json');

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
React.render(<WorkshopComponent tasks={tasks}/>, document.getElementById('main'));
