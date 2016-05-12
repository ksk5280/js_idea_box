function saveIdea () {
  var
    data = {
      'title': $('#title').val(),
      'body': $('#body').val()
    };
  $.post('/api/v1/ideas', data, ideaSaved);
  clearFields;
}

function clearFields () {
  $('#title').val(''),
  $('#body').val('')
}

function ideaSaved (response) {
  var content = '';

  content += sprintf('<div class="idea" id="idea-%s">', response.id);
  content += sprintf('<h3 class="title">%s</h3>', response.title);
  content += sprintf('<h5 class="body">%s</h5>', response.body);
  content += sprintf('<p class="quality">%s</p>', 'swill');
  content += sprintf('<button type="button" name="delete" id="%s" ', response.id);
  content += sprintf('method="delete" class="delete-button">%s</button>', 'Delete');
  content += '</div>';

  $('#ideas').prepend(content);
}
