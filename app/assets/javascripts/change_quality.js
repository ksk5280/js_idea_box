function thumbsUpClicked () {
  var qualityObject = $(this).siblings("[class='quality']")
  var qualityHtml = qualityObject.html();

  updatedQualityHtml = increaseQuality(qualityHtml);

  $.ajax({
    url: "api/v1/ideas/" + this.id,
    method: "PATCH",
    data: { 'quality' : updatedQualityHtml },
    success: updateIdea(this.id, qualityObject, updatedQualityHtml)
  });
}

function thumbsDownClicked () {
  console.log('thumbsDownClicked')
  var qualityObject = $(this).siblings("[class='quality']")
  var qualityHtml = qualityObject.html();

  updatedQualityHtml = decreaseQuality(qualityHtml);

  $.ajax({
    url: "api/v1/ideas/" + this.id,
    method: "PATCH",
    data: { 'quality' : updatedQualityHtml },
    success: updateIdea(this.id, qualityObject, updatedQualityHtml)
  });
}

function updateIdea(id, qualityObject, updatedQualityHtml) {
  qualityObject.html(updatedQualityHtml);
}

function increaseQuality(quality) {
  if (quality === "swill") {
    return "plausible";
  } else {
    return "genius";
  }
}

function decreaseQuality(quality) {
  if (quality === "genius") {
    return "plausible";
  } else {
    return "swill";
  }
}
