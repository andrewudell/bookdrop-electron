var $ = jQuery = require('jquery');
var _ = require('lodash');
var bootstrap = require('bootstrap');
var fs = eRequire('fs');
var loadBooks = JSON.parse(fs.readFileSync(dataLocation));

var electron = eRequire('electron');
var ipc = electron.ipcRenderer;

var React = require('react');
var ReactDOM = require('react-dom');
var BookList = require('./BookList');
var Toolbar = require('./Toolbar');
var AddBook = require('./AddBook');
var HeaderNav = require('./HeaderNav');
var Footer = require('./Footer');
var Share = require('./Share');

var MainInterface = React.createClass({
  getInitialState: function() {
    return {
      bookBodyVisible: false,
      orderBy: 'bookTitle',
      orderDir: 'asc',
      queryText: '',
      myBooks: loadBooks
    } //return
  }, //getInitialState

  componentDidUpdate: function() {
    fs.writeFile(dataLocation, JSON.stringify(this.state.myBooks), 'utf8',
    function(err) {
      if (err) {
        console.log(err);
      }
    }); // writeFile
  }, // componentDidUpdate

  toggleBookDisplay: function() {
    var tempVisibility = !this.state.bookBodyVisible;
    this.setState({
      bookBodyVisible: tempVisibility
    }); //setState
  }, //toggleBookDisplay

  showAbout:function() {
    ipc.sendSync('openInfoWindow')
  },

  addItem: function(tempItem) {
    var tempBooks = this.state.myBooks;
    tempBooks.push(tempItem);
    this.setState({
      myBooks: tempBooks,
      bookBodyVisible: false
    }) // setState
  }, // addItem

  deleteMessage: function(item) {
    var allBooks = this.state.myBooks;
    var newBooks = _.without(allBooks, item);
    this.setState({
      myBooks: newBooks
    }); //setState
  }, //deleteMessage

  searchBooks: function(query) {
    this.setState({
      queryText: query
    }); // setState
  }, // searchBooks

  reOrder: function(orderBy, orderDir) {
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir
    })
  },

  render: function() {
    var filteredBooks = []; // used for searching
    var queryText = this.state.queryText.toLowerCase(); // search query
    var orderBy = this.state.orderBy;
    var orderDir = this.state.orderDir;
    var myBooks = this.state.myBooks;

    if(this.state.bookBodyVisible === true) {
      $('#addBook').modal('show');
    } else {
      $('#addBook').modal('hide');
    }

    for (var i = 0; i < myBooks.length; i++) {
      if (
        (myBooks[i].bookTitle.toLowerCase().indexOf(queryText)!=-1) ||
        (myBooks[i].bookAuthor.toLowerCase().indexOf(queryText)!=-1) ||
        (myBooks[i].bookReview.toLowerCase().indexOf(queryText)!=-1)
      ) {
        filteredBooks.push(myBooks[i]);
      }
    }

    filteredBooks = _.orderBy(filteredBooks, function(item) {
      return item[orderBy].toLowerCase();
    }, orderDir); // order filteredBooks

    filteredBooks=filteredBooks.map(function(item, index) {
      return(
        <BookList key = {index}
          singleItem = {item}
          whichItem =  {item}
          onDelete = {this.deleteMessage}
        />
      ) // return
    }.bind(this)); // Books.map
    return(
      <div className="application">
        <HeaderNav
          orderBy = {this.state.orderBy}
          orderDir = {this.state.orderDir}
          onReorder = {this.reOrder}
          onSearch = {this.searchBooks}
        />
        <div className="interface">
          <Toolbar
            handleAbout ={this.showAbout}
            handleToggle={this.toggleBookDisplay}
          />
          <AddBook
            handleToggle = {this.toggleBookDisplay}
            addBook = {this.addItem}
          />
          <div className="main">
            <div>
              <Share />
            </div>
            <div>
              {filteredBooks}
            </div>
          </div>
        </div>
      </div>
      );
    } //render
}); //MainInterface

ReactDOM.render(
  <MainInterface />,
  document.getElementById('bookRecs')
); //render
