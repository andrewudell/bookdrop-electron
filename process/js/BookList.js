var React = require('react');

var BookList = React.createClass({
  handleDelete: function() {
    this.props.onDelete(this.props.whichItem);
  },
  render: function() {
    return(
      <div className = "book-list">
        <div className = "book-item book-title">
          {this.props.singleItem.bookTitle}
          <span className="pull-right icon icon-cancel-circled delete" onClick={this.handleDelete}></span>
        </div>
        <div className = "book-item book-author">By {this.props.singleItem.bookAuthor}</div>
        <div className = "book-item book-revew">Review: {this.props.singleItem.bookReview}</div>
      </div>
    )
  }
});

module.exports = BookList;
