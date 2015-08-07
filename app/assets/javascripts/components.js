var React = require('react');
var Container = require('./users/Container.react.js');

module.exports = function() {
  var container = document.querySelector('[data-js="newUser"]');
  if (container) {
    React.render(<Container />, container);
  }
};
