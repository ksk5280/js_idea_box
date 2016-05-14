function saveIdea () {
  var
    data = $('form').serialize();

  $.ajax({
    type: 'POST',
    url: '/api/v1/ideas',
    data: data,
    success: renderIdea,
    error: showErrorMessage
  });

  clearFields();
}

function clearFields () {
  $('#title').val('');
  $('#body').val('');
}

function showErrorMessage() {
  $('#error-message').slideDown(function() {
    setTimeout(function() {
      $('#error-message').slideUp();
    }, 5000);
  });
}
