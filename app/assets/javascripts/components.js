var React = require('react');
var Signup = require('./users/Signup.react.js');
var Login = require('./sessions/Login.react.js');

module.exports = function() {
  var signup = document.querySelector('[data-js="newUser"]');
  var login = document.querySelector('[data-js="newLogin"]');
  if (signup) {
    React.render(<Signup />, signup);
  } else if (login) {
    React.render(<Login />, login);
  }
};
