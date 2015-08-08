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
          <label htmlFor="date">Date: </label>
          <input ref= "date" id="date" />
        </div>
        <div>
          <label htmlFor="amount">Amount: </label>
          <input ref= "amount" id="amount" />
        </div>
        <div>
          <label htmlFor="category">Category: </label>
          <input ref= "category" id="category" />
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
      date: this.refs.date.getDOMNode().value.trim(),
      amount: this.refs.amount.getDOMNode().value.trim(),
      category: this.refs.category.getDOMNode().value.trim(),
    };
    this.props.createTransaction(data);
  },

  _clearInputs: function() {
    var self = this;
    ['name', 'date', 'amount', 'category'].forEach(function(transaction) {
      self.refs[transaction].getDOMNode().value = '';
    });
  }
});

module.exports = Form;
