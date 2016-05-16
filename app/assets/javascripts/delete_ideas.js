function deleteButtonClicked () {
  var
    targetId = this.id.split('-')[0];

  $.ajax({
    url: "api/v1/ideas/" + targetId,
    method: "DELETE",
    success: ideaDeleted(targetId),
    error: ajaxPrintError
  });
}

function ideaDeleted (id) {
  $(sprintf('#%s-idea', id)).fadeOut(500, function() {
    $(this).remove();
  });
}
