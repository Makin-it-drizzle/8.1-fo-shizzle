var React = require('react');
var request = require('superagent');

var EditUser = React.createClass({
  getInitialState: function(){
    this._fetchUser();
  },

  render: function(){
    <div>
      <h1>edit</h1>
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
  }

})
