var React = require('react');
var Transaction = require('./Transaction.react');

var List = React.createClass({
  render: function(){
    return (
      <table>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Category</th>
        </tr>
        {this._buildTransactions()}
      </table>
    );
  },

  _buildTransactions: function() {
    return this.props.transactions.map(function(transaction) {
      return <Transaction data={transaction} updateTransaction={this.props.updateTransaction} removeTransaction={this.props.removeTransaction} key={transaction.name + transaction.id} />
    }.bind(this));
  }

});

module.exports = List;
