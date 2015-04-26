/*
    utils/WebAPIUtils.js: Exposes helper functions that de-/serialize data from/to the server.
 */

module.exports = {

    serializeQuestion: function (raw_data) {
        // nothing to serialize
        return raw_data;
    },

    deserializeQuestion: function (data) {
        // nothing to deserialize
        return data;
    }
};