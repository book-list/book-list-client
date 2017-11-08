'use strict';

page('/book-list-client/', app.bookView.initIndexPage);
page('/book-list-client/detail', app.detailView.initIndexPage);
page('/book-list-client/new', app.addView.initIndexPage);

page();
