'use strict';

page('/', app.bookView.initIndexPage);
page('/detail', app.detailView.initIndexPage);
page('/new', app.bookView.initNewPage);

page();
