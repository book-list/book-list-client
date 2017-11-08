'use strict';

var app = app || {};

(function(module) {
  const detailView = {};

  detailView.initIndexPage = function() {
    $('.container').hide();
    $('.book-view').show();
    app.Book.all.map(book => $('#book-list').append(book.toHtml()));
  }

  module.detailView = detailView;
})(app)

$(function() {
  app.Book.fetchOne(app.detailView.initIndexPage);
})
