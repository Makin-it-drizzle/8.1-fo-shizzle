var React = require('react');
var request = require('superagent')


var Form = React.createClass({
  componentWillUpdate: function(){
    this._clearInputs();
  },
  render: function() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input ref="name" type="text" name="user[name]" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input ref= "email" type="text" name="user[email]" id="email" />
        </div>
        <div>
          <label htmlFor="user_avatar">Avater</label>
          <input ref="avatar" type="file" name="user[avatar]" id="avatar" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input ref= "password" type="text" name="user[password]" id="password" />
        </div>
        <div>
          <label htmlFor="password_confirmation">Password Confirmation: </label>
          <input ref= "password_confirmation" type="text" name="user[password_confirmation]" id="password_confirmation" />
        </div>
        <div>
          <button className="submit">Submit</button>
        </div>
      </form>

    );
  },

  _handleSubmit: function(e) {
   e.preventDefault();
   var fd = new FormData(e.target);
   console.log(fd);
   request
     .post('/users')
     .set('Accept', 'application/json')
     .send(fd)
     .set('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
     .end(this._handleCreate);
   },

   _handleCreate: function(err, res) {
     if (err) {
       console.log(err.response);
       return;
     }
     this.forceUpdate();
     window.location = "/";
   }



});

module.exports = Form;
