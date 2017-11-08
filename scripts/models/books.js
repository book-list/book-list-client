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

  app.Book.prototype.toHtml = function() {
    let template = Handlebars.compile($('#book-list-template').text());
    return template(this);
  }

  app.Book.all = [];

  app.Book.loadAll = rows => {
    app.Book.all = rows.map(book => new app.Book(book));
  }

  app.Book.fetchAll = callback =>
    $.get(`${__API_URL__}api/v1/books`)
      .then(app.Book.loadAll)
      .then(callback)
      .catch(errorCallback);

  Book.prototype.insertBook = function(callback) {
    $.post('/api/v1/books', {author: this.author, title: this.title, isbn: this.isbn, image_url: this.image_url, description: this.description})
      .then(console.log)
      .then(callback);
  };

  module.Book = Book;
})(app)
