var React = require('react');


var Form = React.createClass({
  componentWillUpdate: function(){
    this._clearInputs();
  },
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
          <label htmlFor="password">Password: </label>
          <input ref= "password" id="password" />
        </div>
        <div>
          <label htmlFor="password_confirmation">Password Confirmation: </label>
          <input ref= "password_confirmation" id="password_confirmation" />
        </div>
        <div>
          <button className="submit">Submit</button>
        </div>
      </form>
    );
  },

  _handleSubmit: function(e) {
    e.preventDefault();
    var data = {
      user: {
        name: this.refs.name.getDOMNode().value.trim(),
        email: this.refs.email.getDOMNode().value.trim(),
        password: this.refs.password.getDOMNode().value.trim(),
        password_confirmation: this.refs.password_confirmation.getDOMNode().value.trim()
     }
    };
    this.props.createUser(data);
  },

  _clearInputs: function() {
    var self = this;
    ['name', 'email', 'password', 'password_confirmation'].forEach(function(item) {
      self.refs[item].getDOMNode().value = '';
    });
  }
});

module.exports = Form;
