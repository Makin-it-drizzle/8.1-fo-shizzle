var React = require('react');
var request = require('superagent');
var Form = require('./Form.react');
var List = require('./List.react');

var Users = React.createClass({
  getInitialState: function(){
    return {
      users: []
    };
  },

  componentWillMount: function() {
    this._fetchUsers();
  },

  render: function() {
    return (
      <div>
        <Form createUser={this._createUser} />
        <List users={this.state.users} />
      </div>
    )
  },

  _fetchUsers: function() {
    request
      .get('/users')
      .set('Accept', 'application/json')
      .end(this._handleFetch);
  },

  _createUser: function(data) {
    request
    .post('/users')
    .send(data)
    .set('Accept', 'application/json')
    .set('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
    .end(this._handleCreate)
  },

  _handleFetch: function(err, res) {
    if (err) {
      console.log(err.response);
      return;
    }
    this.setState({ users: res.body });
  },

  _handleCreate: function(err, res) {
    if (err) {
      console.log(err.response);
      return;
    }
    this._fetchUsers();
  }

});

module.exports = Users;
