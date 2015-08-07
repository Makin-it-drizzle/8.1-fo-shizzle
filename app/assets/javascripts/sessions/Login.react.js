var React = require('react');
var request = require('superagent');
var Form = require('./Form.react.js')

var Login = React.createClass({

  render: function() {
    return (
      <div>
        <Form createSession={ this._createSession } />
      </div>
    )
  }

})

module.exports = Login;
