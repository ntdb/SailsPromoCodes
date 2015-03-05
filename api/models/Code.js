/**
* Code.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var defaultDate = function() {
  var now = new Date();
  var then = new Date();
  then.setYear(now.getFullYear() + 1);
  return then.toISOString();
};

module.exports = {

  attributes: {

    code: {
      type: 'string',
      required: true,
      unique: true
    },

    description: {
      type: 'string',
      required: true
    },

    redeemed: {
      type: 'boolean',
      defaultsTo: false
    },

    expiresAt: {
      type: 'dateTime',
      defaultsTo: defaultDate()
    }

  }
};

