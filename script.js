$(document).ready(function() {
  function search() {
    var userInput = $("#userInput").val();
    var wiki_img_api = "https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&callback=?&titles=" + userInput;
    var wiki_api =
      "https://en.wikipedia.org/w/api.php?action=query&rvprop=content&prop=extracts&exsentences=3&format=json&callback=?&titles=" + userInput;
    $.getJSON(wiki_api, function(data) {
      $.each(data.query.pages, function(i, data) {
        $("#wiki_article").html(data.extract);
      });
    });
    $.getJSON(wiki_img_api, function(data) {
      $.each(data.query.pages, function(i, data) {
        var img_link = data.thumbnail.source;
        $("#wiki_article2").html(img_link.replace("/",""));
      });
    });
  }
  function randomSearch() {
    var randomWiki = "https://en.wikipedia.org/wiki/Special:Random";
  }

  $("#searchButton").on("click", function() {
    search();
  });

  $("#randomButton").on("click", function() {
    randomSearch();
  });
});
