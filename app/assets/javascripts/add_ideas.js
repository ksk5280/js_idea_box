function saveIdea () {
  var
    data = {
      'title': $('#title').val(),
      'body': $('#body').val()
    };
  $.post('/api/v1/ideas', data, renderIdea);
  clearFields();
}

function clearFields () {
  $('#title').val(''),
  $('#body').val('')
}
