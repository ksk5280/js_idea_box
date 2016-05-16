function showSortList(event) {
  document.getElementById("quality-dropdown").classList.toggle("show");
}

// Hide dropdown if user clicks outside of sort button
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

function sortDesc() {
  var
    $ideas = $('.idea'),
    $ideasParent = $ideas.parent(),
    $ideasSorted = _.sortBy($ideas, function(idea) {
      var
        ideaValues = { 'genius': 0, 'plausible': 1, 'swill': 2 },
        $idea = $(idea),
        qualityObject = $idea.find('.quality'),
        quality = qualityObject.text();

      return ideaValues[quality];
    });
  _.each($ideasSorted, function (idea, index) {
    var $idea = $(idea);
    $idea.detach();
    $ideasParent.append($idea);
  });
}

function sortAsc() {
  var
    $ideas = $('.idea'),
    $ideasParent = $ideas.parent(),
    $ideasSorted = _.sortBy($ideas, function(idea) {
      var
        ideaValues = { 'genius': 2, 'plausible': 1, 'swill': 0 },
        $idea = $(idea),
        qualityObject = $idea.find('.quality'),
        quality = qualityObject.text();

      return ideaValues[quality];
    });
  _.each($ideasSorted, function (idea, index) {
    var $idea = $(idea);
    $idea.detach();
    $ideasParent.append($idea);
  });
}
