function renderIdea(response) {
  var
    ideaDiv,
    deleteButton,
    content = '';

  content += sprintf('<div class="idea" id="%s-idea">', response.id);
  content += sprintf('<h3 class="hide-overflow" data-key="title" id="%s-title"', response.id);
  content += sprintf('contenteditable="true">%s</h3>', response.title);
  content += sprintf('<h5 class="hide-overflow" data-key="body" id="%s-body"', response.id);
  content += sprintf('contenteditable="true">%s</h5>', trimBody(response.body, 100));
  content += sprintf('<p class="quality">%s</p>', response.quality);
  content += sprintf('<button type="button" id="%s-thumbs-up"', response.id);
  content += sprintf('class="thumbs-up btn btn-default">');
  content += sprintf('<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true">');
  content += sprintf('</span></button>');
  content += sprintf('<button type="button" id="%s-thumbs-down"', response.id);
  content += sprintf('class="thumbs-down btn btn-default">');
  content += sprintf('<span class="glyphicon glyphicon-thumbs-down" aria-hidden="true">');
  content += sprintf('</span></button>');
  content += sprintf('<button type="button" name="delete" id="%s-delete"', response.id);
  content += sprintf('class="delete-button btn">%s</button>', 'Delete');
  content += '</div>';

  ideaDiv = $(content);
  $('#ideas').prepend(ideaDiv);

// Add event listeners
  ideaDiv.find('.delete-button').on('click', deleteButtonClicked);
  ideaDiv.find('.thumbs-up').on('click', changeQuality);
  ideaDiv.find('.thumbs-down').on('click', changeQuality);
  $(sprintf('#%s-title', response.id)).on('blur', ideaEditBlur);
  $(sprintf('#%s-title', response.id)).on('keypress', ideaEditKeypress);
  $(sprintf('#%s-body', response.id)).on('blur', ideaEditBlur);
  $(sprintf('#%s-body', response.id)).on('keypress', ideaEditKeypress);
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
