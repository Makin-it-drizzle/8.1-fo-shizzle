var React = require('react');


var User = React.createClass({
  render: function(){
    return (
      <li>
        Name: {this.props.data.name} | Email: {this.props.data.email} | Phone: {this.props.data.phone}
      </li>
    )
  },

});

module.exports = User;
