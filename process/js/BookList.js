var React = require('react');

var BookList = React.createClass({
  handleDelete: function() {
    this.props.onDelete(this.props.whichItem);
  },
  render: function() {
    return(
      <div>
        <div><button onClick={this.handleDelete}>Delete</button></div>
        <div>Book Title: {this.props.singleItem.bookTitle}</div>
        <div>Book Author: {this.props.singleItem.bookAuthor}</div>
        <div>Book Review: {this.props.singleItem.bookReview}</div>
      </div>
    )
  }
});

module.exports = BookList;
