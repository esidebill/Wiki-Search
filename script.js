$(document).ready(function() {
  function search() {
    $("#wiki_article").html("");
    var userInput = $("#userInput").val();
    var pageCount = $("#count").val();
    var wiki_api =
      "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&callback=?&srlimit=" +
      pageCount +
      "&srsearch=" +
      userInput;
    $.getJSON(wiki_api, function(data) {
      for (i = 0; i < 20; i++) {
        $("#wiki_article").append(
          "<a href='https://en.wikipedia.org/wiki/" +
            data.query.search[i].title +
            "' target='_blank'><div class='well'><strong>" +
            data.query.search[i].title +
            "</strong><br>" +
            data.query.search[i].snippet +
            "<br>" +
            "</div></a>"
        );
      }
    });
  }

  $("#searchButton").on("click", function() {
    search();
  });
});
