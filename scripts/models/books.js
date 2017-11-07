'use strict';

var app = app || {};
var __API_URL__ = 'https://git.heroku.com/kc-ng-booklist.git';

(function(module) {
  function errorCallback(err) {
    module.errorView.initErrorPage(err);
  }

  function Book(taskObject) {
    Object.keys(taskObject).forEach(key => this[key] = taskObject[key]);
  }

  Book.prototype.toHtml = function() {
    let template = Handlebars.compile($('#task-template').text());
    return template(this);
  }

  Book.all = [];

  Book.loadAll = rows => {
    Book.all = rows.map(book => new Book(book));
  }

  Book.fetchAll = callback =>
    $.get(`${__API_URL__}/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);

  module.Book = Book;
})(app)
