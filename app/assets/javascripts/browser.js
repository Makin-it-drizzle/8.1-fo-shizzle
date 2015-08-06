var React = require('react');
var Users = require('./users/Users.react.js');

var browser = function() {
  var div = document.querySelector('[data-js="users"]');
  React.render(<Users />, div);
};

module.exports = browser;
