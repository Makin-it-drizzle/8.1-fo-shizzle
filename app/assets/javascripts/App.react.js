var React = require('react');
var request = require('superagent');
var Form = require('./Form.react');
var List = require('./List.react');

var App = React.createClass({
  getInitialState: function(){
    return {
      users: []
    };
  },

  componentWillMount: function() {
    this._fetchApp();
  },

  render: function() {
    return (
      <div>
        <Form create={this._createForm} />
        <List users={this.state.users} />
      </div>
    )
  },

  _fetchApp: function() {
    request
      .get('/users')
      .set('Accept', 'application/json')
      .end(this._handleFetch);
  },

  _createApp: function(data) {
    request
    .post('/users')
    .send(data)
    .set('Accept', 'application/json')
    .set('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
    .end(this._handleCreate)
  },

  _handleFetch: function(err, res) {
    if (err) {
      window.alert('FAIL!');
      return;
    }
    this.setState({ users: res.body });
  },

  _handleCreate: function(err, res) {
    if (err) {
      window.alert('SUPER FAIL!');
      return;
    }
    this._fetchApp();
  }

});

module.exports = App;