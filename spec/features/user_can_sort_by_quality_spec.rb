require "rails_helper"

RSpec.feature "User can sort by quality" do
  scenario "they see ideas sorted with best ideas first", js: true do
    idea1 = Idea.create(title: "Idea title 1", body: "Idea body 1", quality: "genius")
    idea2 = Idea.create(title: "Idea title 2", body: "Idea body 2", quality: "swill")
    idea3 = Idea.create(title: "Idea title 3", body: "Idea body 3", quality: "plausible")

    visit "/"

    sleep 1
    expect(idea3.title).to appear_before(idea1.title)

    
  end
end
