var React = require('react');

var Form = React.createClass({
  componentDidMount: function(){
    var token = document.querySelector('meta[name="csrf-token"]').content;
    this.refs.token.getDOMNode().value = token;
  },
  render: function(){

    return (
      <form method="POST" action="/login">
        <input ref="token" type="hidden" name="authenticity_token" />
        <div>
          <label htmlFor="email">Email: </label>
          <input ref="email" id="email" name="user[email]" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input ref="password" id="password" name="user[password]" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }

});

module.exports = Form;
