function renderIdea(response) {
  var
    ideaDiv,
    deleteButton,
    content = '';

  content += sprintf('<div class="idea" id="idea-%s">', response.id);
  content += sprintf('<h3 class="title">%s</h3>', response.title);
  content += sprintf('<h5 class="body">%s</h5>', response.body);
  content += sprintf('<p class="quality">%s</p>', response.quality);
  content += sprintf('<button type="button" name="delete" id="%s"', response.id);
  content += sprintf('class="delete-button">%s</button>', 'Delete');
  content += sprintf('<button type="button" id="%s"', response.id);
  content += sprintf('class="thumbs-up">%s</button>', 'thumbs up');
  content += sprintf('<button type="button" id="%s"', response.id);
  content += sprintf('class="thumbs-down">%s</button>', 'thumbs down');
  content += '</div>';

  ideaDiv = $(content);
  $('#ideas').prepend(ideaDiv);

  deleteButton = ideaDiv.find('.delete-button');
  deleteButton.on('click', deleteButtonClicked);

  thumbsUpButton = ideaDiv.find('.thumbs-up');
  thumbsUpButton.on('click', thumbsUpClicked);

  thumbsDownButton = ideaDiv.find('.thumbs-down');
  thumbsDownButton.on('click', thumbsDownClicked);
}

function getIdeas() {
  $.get('/api/v1/ideas', function(ideas){
    ideas.forEach(function(idea){
      renderIdea(idea);
    });
  });
}
