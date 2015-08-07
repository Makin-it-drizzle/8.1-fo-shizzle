var React = require('react');
var request = require('superagent');
var Form = require('./signup/Form.react');

var Container = React.createClass({

  render: function() {
    return (
      <div>
        <Form createUser={this._createUser} />
      </div>
    )
  },

  _createUser: function(data) {
    request
    .post('/users')
    .send(data)
    .set('Accept', 'application/json')
    .set('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
    .end(this._handleCreate)
  },

  _handleCreate: function(err, res) {
    if (err) {
      console.log(err.response);
      return;
    }
    this.forceUpdate();
    window.location = "/";
  }

});

module.exports = Container;
