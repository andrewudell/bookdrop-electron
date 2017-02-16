var React = require('react');

var Toolbar = React.createClass({
  createBook: function() {
    this.props.handleToggle();
  },

  toggleAbout: function() {
    this.props.handleAbout();
  },

  render: function() {
    return(
      <nav className="nav-group">
        <a className="nav-group-item" onClick={this.createBook}>
          <span className="icon icon-plus-circled"></span>
          <p>Add a book</p>
        </a>
        <a className="nav-group-item" onClick={this.toggleAbout}>
          <span className="icon icon-help-circled"></span>
          <p>About Bookdrop</p>
        </a>
      </nav>
    ) //return
  } //render
  }); //Toolbar

  module.exports = Toolbar;
