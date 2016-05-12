$('body').on('click', 'button.delete-button', function() {
  console.log('clicked', this.id);
  $.ajax({
    url: "api/v1/ideas/" + this.id,
    method: "DELETE",
    success: ideaDeleted(this.id)
  });
})

var ideaDeleted = function(id) {
  $('#idea-' + id).remove();
}
