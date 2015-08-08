var React = require('react');


var Transaction = React.createClass({
  getInitialState: function() {
    return {
      isEditing: false
    };
  },

  render: function() {
    return this._buildCells();
  },

  _buildCells: function() {
    if (this.state.isEditing) {
      return (
        <tr>
          <td><input ref="name" type="text" defaultValue={this.props.data.name} /></td>
          <td><input ref="date" type="text" defaultValue={this.props.data.date} /></td>
          <td><input ref="amount" type="text" defaultValue={this.props.data.amount} /></td>
          <td><input ref="category" type="text" defaultValue={this.props.data.category} /></td>
          <td>
            <button onClick={this._handleSave}>Save</button>
            <button>Remove</button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td>{this.props.data.name}</td>
          <td>{this.props.data.date}</td>
          <td>{this.props.data.amount}</td>
          <td>{this.props.data.category}</td>
          <td>
            <button onClick={this._handleEdit}>Edit</button>
            <button onClick={this._handleRemove}>Remove</button>
          </td>
        </tr>
      );
    }
  },

  _handleEdit: function(e) {
    e.preventDefault();
    this.setState({ isEditing: true })
  },

  _handleRemove: function(e) {
    e.preventDefault();
    this.props.removeTransaction(this.props.data.id);
  },

  _handleSave: function(e) {
    e.preventDefault();
    var data = {
      id: this.props.data.id,
      name: this.refs.name.getDOMNode().value.trim(),
      date: this.refs.date.getDOMNode().value.trim(),
      amount: this.refs.amount.getDOMNode().value.trim(),
      category: this.refs.category.getDOMNode().value.trim(),
    };
    this.props.updateTransaction(data);
  }
});

module.exports = Transaction;
