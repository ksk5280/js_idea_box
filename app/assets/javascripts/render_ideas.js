function renderIdea(response) {
  var
    ideaDiv,
    deleteButton,
    content = '';

  content += sprintf('<div class="idea" id="idea-%s">', response.id);
  content += sprintf('<h3 class="title"contenteditable="true" >%s</h3>', response.title);
  content += sprintf('<h5 class="body"contenteditable="true" >%s</h5>', response.body);
  content += sprintf('<p class="quality">%s</p>', response.quality);
  content += sprintf('<button type="button" id="%s"', response.id);
  content += sprintf('class="thumbs-up btn btn-default">');
  content += sprintf('<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true">');
  content += sprintf('</span></button>');
  content += sprintf('<button type="button" id="%s"', response.id);
  content += sprintf('class="thumbs-down btn btn-default">');
  content += sprintf('<span class="glyphicon glyphicon-thumbs-down" aria-hidden="true">');
  content += sprintf('</span></button>');
  content += sprintf('<button type="button" name="delete" id="%s"', response.id);
  content += sprintf('class="delete-button btn btn-danger">%s</button>', 'Delete');
  content += '</div>';

  ideaDiv = $(content);
  $('#ideas').prepend(ideaDiv);

// Add event listeners to each button
  $('.delete-button').on('click', deleteButtonClicked);
  $('.thumbs-up').on('click', changeQuality);
  $('.thumbs-down').on('click', changeQuality);
}

function getIdeas() {
  $.get('/api/v1/ideas', function(ideas){
    ideas.forEach(function(idea){
      renderIdea(idea);
    });
  });
}
