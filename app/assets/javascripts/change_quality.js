function changeQuality () {
  var qualityObject = $(this).siblings("[class='quality']");
  var qualityHtml = qualityObject.html();

  if ($(this).hasClass("thumbs-up")) {
    updatedQualityHtml = increaseQuality(qualityHtml);
  } else {
    updatedQualityHtml = decreaseQuality(qualityHtml);
  }

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
