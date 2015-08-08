var React = require('react');
var request = require('superagent');
var Form = require('./Form.react');
var List = require('./List.react');

var Container = React.createClass({
  getInitialState: function(){
    return {
      transactions: []
    };
  },

  componentWillMount: function() {
    this._fetchTransactions();
  },

  render: function() {
    return (
      <div>
        <Form createTransaction={this._createTransaction} />
        <List transactions={this.state.transactions} updateTransaction={this._updateTransaction} removeTransaction={this._removeTransaction} />
      </div>
    );
  },

  _fetchTransactions: function() {
    request
      .get('/transactions')
      .set('Accept', 'application/json')
      .end(this._handleFetch);
  },

  _createTransaction: function(data) {
    request
    .post('/transactions')
    .send(data)
    .set('Accept', 'application/json')
    .set('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
    .end(this._handleChange)
  },

  _updateTransaction: function(data) {
    request
      .patch('/transactions/' + data.id)
      .send(data)
      .set('Accept', 'application/json')
      .set('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
      .end(this._handleChange);
  },

  _removeTransaction: function(id) {
    request
      .del('/transactions/' + id)
      .set('Accept', 'application/json')
      .set('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
      .end(this._handleChange);
  },

  _handleFetch: function(err, res) {
    if (err) {
      console.log(err.response);
      return;
    }
    this.setState({ transactions: res.body });
  },

  _handleChange: function(err, res) {
    if (err) { console.log(err.response); return; }
    this._fetchTransactions();
  }
});

module.exports = Container;
