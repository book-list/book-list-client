'use strict';

page('/book-list-client/', app.bookView.initIndexPage);
page('/book-list-client/detail', app.detailView.initIndexPage);
page('/new', app.bookView.initNewPage);

page();
