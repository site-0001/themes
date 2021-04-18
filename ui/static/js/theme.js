import * as bs from './module/bootstrap.min.js';
import * as share from './module/share.min.js';
import * as select from './module/select.min.js';
import * as gallery from './module/gallery.min.js';
import * as konami from './module/konami.min.js';
import * as date from './module/date.min.js';
import * as console from './module/console.min.js';

// Internal.
bs.nodeActiveTab();
share.popUp();
select.all();
date.local();
console.msg();

// External.
gallery.init();
konami.init();
