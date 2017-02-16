var React = require('react');

var Share = React.createClass({
  render: function() {
    return (
      <div className = "share-button pull-right">
        <button type="button" className="btn btn-primary">Share your Booklist</button>
      </div>
    ) // return
  } // render
}); // footer

module.exports = Share;
