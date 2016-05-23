var Entry = require("./entries.js").Entry;


$(document).ready(function() {

  $("#journalEntry").submit(function(event){
    event.preventDefault();
    var title = $("#entryTitle").val();
    var content = $("#entryContent").val();

    var entry = new Entry(title, content);
    var date = entry.revealDate()
    $(".message").append("<h1>" + entry.title + ": " + entry.content + " - " + date + "</h1>");
  });

});
