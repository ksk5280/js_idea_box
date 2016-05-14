function renderIdea(response) {
  var
    ideaDiv,
    deleteButton,
    content = '';

  content += sprintf('<div class="idea" id="idea-%s">', response.id);
  content += sprintf('<h3 class="title hide-overflow" id="%s"', response.id);
  content += sprintf('contenteditable="true">%s</h3>', response.title);
  content += sprintf('<h5 class="body hide-overflow" id="%s"', response.id);
  content += sprintf('contenteditable="true">%s</h5>', trimBody(response.body, 100));
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

// Add event listeners
  $('.delete-button').on('click', deleteButtonClicked);
  $('.thumbs-up').on('click', changeQuality);
  $('.thumbs-down').on('click', changeQuality);
  $("[contenteditable='true']").on('focus', editIdeas);
}

function getIdeas() {
  $.get('/api/v1/ideas', function(ideas){
    ideas.forEach(function(idea){
      renderIdea(idea);
    });
  });
}

function trimBody(bodyText, maxLength) {
  if (bodyText.length > maxLength) {
    var trimmedString = bodyText.substr(0, maxLength);
    trimmedString = trimmedString.substr(0, Math.min(maxLength, trimmedString.lastIndexOf(" ")));
    return trimmedString + "...";
  } else {
    return bodyText;
  }
}
