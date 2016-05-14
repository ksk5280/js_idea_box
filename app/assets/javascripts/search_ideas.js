$('#search-bar').on('keyup', function(){
  var
    $ideas = $('.idea');
    currentIdea = this.value;

  $ideas.each(function (index, idea) {
    var
      $idea = $(idea);
      titleText = $idea.children("h3").html();
      bodyText = $idea.children("h5").html();
      ideaText = titleText + bodyText;

    if (ideaText.indexOf(currentIdea) !== -1 ) {
      $idea.show();
    } else {
      $idea.hide();
    }
  });
});
