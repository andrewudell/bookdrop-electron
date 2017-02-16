var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="toolbar toolbar-footer">
        <div className="toolbar-actions pull-left">
          Bookdrop 0.0.1
        </div>
      </footer>
    ) // return
  } // render
}); // footer

module.exports = Footer;
