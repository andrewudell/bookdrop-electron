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
          <span className="glyphicon glyphicon-plus"></span>  Add a book
        </a>
        <a className="nav-group-item" onClick={this.toggleAbout}>
          <span className="glyphicon glyphicon-book"></span>  About Bookdrop
        </a>
      </nav>
    ) //return
  } //render
  }); //Toolbar

  module.exports = Toolbar;
