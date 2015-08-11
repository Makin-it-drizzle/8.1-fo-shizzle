var React = require('react')
var request = require('superagent');

var Show = React.createClass({
  getInitialState: function(){
    return {
      user: []
    };
  },

  componentWillMount: function(){
    this._fetchUser();
  },

  render: function() {
    return (
      <ul>
        <li>Name: {this.state.user.name}</li>
        <li>Email: {this.state.user.email}</li>
      </ul>
    );
  },

  _fetchUser: function(){
    request
      .get('/user')
      .set('Accept', 'application/json')
      .end(this._handleFetch);
    },

  _handleFetch: function(err, res) {
    if (err) {
      console.log(err.response);
      return;
    }
    this.setState({ user: res.body })
  }

});
module.exports = Show;
