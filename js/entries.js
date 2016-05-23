var moment = require('moment');

Entry = function(title, content) {
  this.title = title;
  this.content = content;
  this.date;
}

Entry.prototype.revealDate= function() {
  date = moment().format();
  return date;
}

exports.Entry = Entry;
