function deleteButtonClicked () {
  $.ajax({
    url: "api/v1/ideas/" + this.id,
    method: "DELETE",
    success: ideaDeleted(this.id),
    error: ajaxPrintError
  });
}

function ideaDeleted (id) {
  $('#idea-' + id).fadeOut(500, function() {
    $(this).remove();
  });
}
