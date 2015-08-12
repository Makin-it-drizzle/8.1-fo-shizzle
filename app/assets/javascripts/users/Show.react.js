var React = require('react')
var request = require('superagent');

var Show = React.createClass({
  getInitialState: function(){
    return {
      user: [],
      isEditing: false
    };
  },

  componentWillMount: function(){
    this._fetchUser();
  },

  render: function() {
    if (this.state.user.avatar) {
      var url = this.state.user.avatar.url
    } else {
      var url = null
    }
    return (
      <div>
        <img src={url}></img>
        <ul>
          <li>Name: {this.state.user.name}</li>
          <li>Email: {this.state.user.email}</li>
        </ul>
      </div>
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
