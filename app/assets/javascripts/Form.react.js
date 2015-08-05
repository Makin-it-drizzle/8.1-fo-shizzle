var React = require('react');

var Form = React.createClass({
  render: function() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input ref= "Name" id="Name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input ref= "Email" id="Email" />
        </div>
        <div>
          <label htmlFor="password_digest">Password:</label>
          <input ref= "password_digest" id="Password_digest" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  },

  _handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }
})

module.exports = Form;