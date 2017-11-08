'use strict';

page('/', app.bookView.initIndexPage);
page('/detail', app.detailView.initIndexPage);
page('/add', app.bookView.initAddForm);

page();
