var React = require('react');


var User = React.createClass({
  render: function(){
    return (
      <li>
        {this.props.data.name}
      </li>
    )
  },

});

module.exports = User;