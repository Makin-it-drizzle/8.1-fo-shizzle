var React = require('react');
var Signup = require('./users/Signup.react.js');
var Login = require('./sessions/Login.react.js');
var Show = require('./users/Show.react.js');
var Transactions = require('./transactions/Container.react.js')

module.exports = function() {
  var signup = document.querySelector('[data-js="newUser"]');
  var login = document.querySelector('[data-js="newLogin"]');
  var show = document.querySelector('[data-js="showUser"]');
  var transactions = document.querySelector('[data-js="transactions"]');

  if (signup) {
    React.render(<Signup />, signup);
  } else if (login) {
    React.render(<Login />, login);
  } else if (transactions) {
    React.render(<Transactions />, transactions );
  } else if (show) {
    React.render(<Show />, show);
  }
};
