var React = require('react');


var User = React.createClass({
  render: function(){
    return (
      <li>
        Name: {this.props.data.name} | Email: {this.props.data.email}
      </li>
    )
  },

});

module.exports = User;
