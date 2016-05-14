describe('increaseQuality', function() {
  it('increases Quality of idea up to genius', function() {
    var quality = "swill";
    assert.equal(increaseQuality(quality), "plausible");

    quality = "plausible";
    assert.equal(increaseQuality(quality), "genius");

    quality = "genius";
    assert.equal(increaseQuality(quality), "genius");
  });
});

describe('decreaseQuality', function() {
  it('decreases quality of idea down to swill', function() {
    var quality = "genius";
    assert.equal(decreaseQuality(quality), "plausible");

    quality = "plausible";
    assert.equal(decreaseQuality(quality), "swill");

    quality = "swill";
    assert.equal(decreaseQuality(quality), "swill");
  });
});
