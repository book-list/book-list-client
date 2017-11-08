'use strict';

var app = app || {};

(function(module) {
  const addView = {};

  addView.submit = event => {
    event.preventDefault();
    let book = new app.Book({
      author: $('#author').val(),
      title: $('#title').val(),
      isbn: $('#isbn').val(),
      image_url: $('#image_url').val(),
      description: $('#description').val(),
    })
    book.insertBook();
    window.location = '../';
  }

  // addView.initIndexPage = function() {
  //   $('.container').hide();
  //   $('.book-form').show();
  // }

  module.addView = addView;

})(app);
