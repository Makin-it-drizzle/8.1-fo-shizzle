var React = require('react');


var Form = React.createClass({
  render: function() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input ref= "name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input ref= "email" id="email" />
        </div>
        <div>
          <label htmlFor="password_digest">Password: </label>
          <input ref= "password_digest" id="password_digest" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  },

  _handleSubmit: function(e) {
    e.preventDefault();
    var data = {
      name: this.refs.name.getDOMNode().value.trim(),
      email: this.refs.email.getDOMNode().value.trim(),
      password_digest: this.refs.password_digest.getDOMNode().value.trim()
    };
    this.props.createUser(data);
  }
});

module.exports = Form;