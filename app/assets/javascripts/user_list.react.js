var React = require('react');
var User = require('./User.react');

var userList = React.createClass({
  render: function(){
    return (
      <ul>
        {this._buildUsers()}
      </ul>
    )
  },

  _buildUsers: function() {
    return this.props.users.map(function(user) {
      return <User data={user} key={user.name} />
    })
  }

});

module.exports = userList;