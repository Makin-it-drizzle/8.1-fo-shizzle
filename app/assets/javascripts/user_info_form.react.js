var React = require('react');

var userForm = React.createClass({
  render: function() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input id="Name" />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input id="Email" />
        </div>
        <div>
          <label htmlFor="password_digest">Password_digest: </label>
          <input id="Password_digest" />
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

module.exports = userForm;