function deleteButtonClicked () {
  $.ajax({
    url: "api/v1/ideas/" + this.id,
    method: "DELETE",
    success: ideaDeleted(this.id)
  });
}

function ideaDeleted (id) {
  $('#idea-' + id).remove();
}
