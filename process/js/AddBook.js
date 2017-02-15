var React = require('react');

var AddBook = React.createClass({

  toggleBookDisplay: function() {
    this.props.handleToggle();
  },

  handleAdd: function(e) {
    e.preventDefault();
    var tempItem = {
      bookTitle: this.inputBookTitle.value,
      bookAuthor: this.inputBookAuthor.value,
      bookReview: this.inputBookReview.value
    } // tempitems

    this.props.addBook(tempItem);

    // clear field values
   this.inputBookTitle.value = '';
   this.inputBookAuthor.value = '';
   this.inputBookReview.value = '';
  },

  render: function() {
    return(
      <div className="modal fade" id="addBook" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={this.toggleBookDisplay} aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Add a book</h4>
            </div>

            <form className="modal-body add-book form-horizontal" onSubmit={this.handleAdd}>
              <div className="form-group">
                <label className="col-sm-3 control-label" htmlFor="bookTitle">Title</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" id="bookTitle" ref={(ref) => this.inputBookTitle= ref} placeholder="Title" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-3 control-label" htmlFor="petName">Author</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" id="bookAuthor" ref={(ref) => this.inputBookAuthor= ref} placeholder="Author" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-3 control-label" htmlFor="aptNotes">Review</label>
                <div className="col-sm-9">
                  <textarea className="form-control" rows="4" cols="50" id="bookReview" ref={(ref) => this.inputBookReview= ref} placeholder="Notes"></textarea>
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-offset-3 col-sm-9">
                  <div className="pull-right">
                    <button type="button" className="btn btn-default"  onClick={this.toggleBookDisplay}>Cancel</button>&nbsp;
                    <button type="submit" className="btn btn-primary">Add Book</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    ) //return
  } //render
}); // AddBook

module.exports=AddBook;
