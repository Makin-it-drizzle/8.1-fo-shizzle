var React = require('react');
var request = require('superagent');
var Show = require('./Show.react.js');

var Edit = React.createClass({
  getInitialState: function(){
    return {
      user: []
    };
  },

  componentWillMount: function(){
    this._fetchUser();
  },

  render: function(){
    <div>
      <Show user={this.state.user} />
    </div>
  },
  _fetchUser: function(){
  request
    .get('/edituser')
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

module.exports = Edit
