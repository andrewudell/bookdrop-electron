var React = require('react');

var HeaderNav = React.createClass({
  handleSearch: function(e) {
    this.props.onSearch(e.target.value);
  }, // handleSearch

  handleSort: function(e) {
    this.props.onReorder(e.target.id, this.props.orderDir);
  },

  handleOrder: function(e) {
    this.props.onReorder(this.props.orderBy, e.target.id);
  },

  render: function() {
    return (
      <nav className="navigation navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header"><a className="navbar-brand" href="#">Bookdrop</a></div>
          <div className="navbar-form navbar-right search-appointments">
              <div className="input-group">
                <input id="SearchApts" onChange={this.handleSearch} placeholder="Search" autoFocus type="text" className="form-control" aria-label="Search Books" />
                <div className="input-group-btn">
                  <button type="button" className="btn btn-info dropdown-toggle"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by: <span className="caret"></span></button>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li><a href="#" id="bookTitle" onClick={this.handleSort}>Title {(this.props.orderBy === 'bookTitle') ? <span className="glyphicon glyphicon-ok"></span>:null}</a></li>
                       <li><a href="#" id="bookAuthor" onClick={this.handleSort}>Author {(this.props.orderBy === 'bookAuthor') ? <span className="glyphicon glyphicon-ok"></span>:null}</a></li>
                       <li><a href="#" id="bookReview" onClick={this.handleSort}>Review  {(this.props.orderBy === 'bookReview') ? <span className="glyphicon glyphicon-ok"></span>:null}</a></li>
                       <li role="separator" className="divider"></li>
                       <li><a href="#" id="asc" onClick={this.handleOrder}>Asc {(this.props.orderDir === 'asc') ? <span className="glyphicon glyphicon-ok"></span>:null}</a></li>
                       <li><a href="#" id="desc" onClick={this.handleOrder}>Desc {(this.props.orderDir === 'desc') ? <span className="glyphicon glyphicon-ok"></span>:null}</a></li>
                    </ul>
                </div>{/* input-group-btn */}
            </div>{/* input-group */}
          </div>{/* navbar-form */}
        </div>{/* container-fluid */}
      </nav>
    ) // return
  } // render
}); // HeaderNav

module.exports = HeaderNav;
