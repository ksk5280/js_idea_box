function editIdeas (event) {
  var
    $this = $(this);
    contentId = $this[0].id;
    className = $this.attr("class");

  $this.keypress(function(event) {
    if(event.which === 13) {
      this.blur();
      event.preventDefault();
    }
  });

  $this.blur(function(){
    newText = $this.html();
    changeData(contentId, newText, className);
  });
}

function changeData(id, newText, className) {
  var data = {};
  data[className] = newText;

  $.ajax({
    url: "api/v1/ideas/" + id,
    method: "PATCH",
    data: data
  });
}
