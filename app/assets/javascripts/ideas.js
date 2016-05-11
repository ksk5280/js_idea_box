$(document).ready(function(){
});

function saveIdea () {
  var
    data = {
      'title': $('#title').val(),
      'body': $('#body').val()
    };
  $.post('/api/v1/ideas', data, ideaSaved);
  $('#title').val(''),
  $('#body').val('')
}

function ideaSaved (response) {
  var
    content = '';

  content += '<div class="idea">';
  content += sprintf('<h3 class="title">%s</h3>', response.title);
  content += sprintf('<h5 class="body">%s</h5>', response.body);
  content += sprintf('<p class="quality">%s</p>', 'swill');
  content += '</div>';

  $('#ideas').prepend(content);
}
