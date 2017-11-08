'use strict';

var app = app || {};
var __API_URL__ = 'https://kc-ng-booklist.herokuapp.com/';

(function(module) {
  function errorCallback(err) {
    module.errorView.initErrorPage(err);
  }

  function Book(bookObject) {
    Object.keys(bookObject).forEach(key => this[key] = bookObject[key]);
  }

  Book.prototype.toHtml = function() {
    let template = Handlebars.compile($('#book-template').text());
    return template(this);
  }

  Book.all = [];

  Book.loadAll = rows => {
    Book.all = rows.map(book => new app.Book(book));
  }

  Book.fetchAll = callback =>
    $.get(`${__API_URL__}books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);

  Book.prototype.insertBook = function(callback) {
    $.post('/books', {author: this.author, title: this.title, isbn: this.isbn, image_url: this.image_url, description: this.description})
      .then(console.log)
      .then(callback);
  };

  module.Book = Book;
})(app)
