var EventEmitter = require('events').EventEmitter;
var assign       = require('object-assign');

/*
    ChangeEventEmitter: EventEmitter that provides default methods for change listening and emission.
    Assign this object to your store in order to "inherit" the EventEmitter and change methods.
 */
var ChangeEventEmitter = assign({}, EventEmitter.prototype, {
    addChangeListener: function (cb) {
        this.on('change', cb);
    },
    removeChangeListener: function (cb) {
        this.removeListener('change', cb);
    },
    emitChange: function () {
        this.emit('change');
    }
});

module.exports = ChangeEventEmitter;