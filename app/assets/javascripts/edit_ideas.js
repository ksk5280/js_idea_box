function ideaEditBlur (e) {
  var
    $this = $(this),
    content = $this.html(),
    contentId = this.id.split('-')[0],
    contentKey = this.getAttribute('data-key');
  changeData(contentId, content, contentKey);
}

function ideaEditKeypress (e) {
  if (e.keyCode === 13) { // Enter key
    e.preventDefault();
    this.blur();
  }
}


function changeData(id, newText, key) {
  var data = {};
  data[key] = newText;

  $.ajax({
    url: "api/v1/ideas/" + id,
    method: "PATCH",
    data: data
  });
}
