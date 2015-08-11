var React = require('react')

var Show = React.createClass({
  render: function() {
    return (
      <ul>
        <li>Name: {this.props.user.name}</li>
        <li>Email: {this.props.user.email}</li>
        <li>Password: {this.props.user.password}</li>
      </ul>
    );
  }
});
module.exports = Show;
