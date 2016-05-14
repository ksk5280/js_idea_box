function saveIdea () {
  var data = $('form').serialize();
  $.post('/api/v1/ideas', data, renderIdea);
  clearFields();
}

function clearFields () {
  $('#title').val('');
  $('#body').val('');
}
