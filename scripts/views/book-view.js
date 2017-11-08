'use strict';

var app = app || {};

(function(module) {
  const bookView = {};

  function reset() {
    $('.container').hide();
  }


  bookView.initIndexPage = function() {
    reset();
    $('.book-view').show();
    app.Book.all.map(book => $('#book-template').append(book.toHtml()));
  }

  bookView.initAddForm = function() {
    reset();
    $('.book-form').show();
    $('#new-form').on('submit', function(e) {
      e.preventDefault();

      let book = new app.Book({
        author: event.target.author.value,
        title: event.target.title.value,
        isbn: event.target.isbn.value,
        image_url: event.target.isbn.value,
        description: event.target.description.value
      })
      console.log('book', book);
      module.book.insertBook(book);
      window.location = '../';
    })
  }

  module.bookView = bookView;

})(app);

$(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
})
