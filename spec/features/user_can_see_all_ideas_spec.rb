require "rails_helper"

RSpec.feature "Use can see all ideas" do
  scenario "they see title, body, and quality for each idea", js: true do
    Idea.create(title: "Idea title", body: "Idea body")
    Idea.create(title: "Idea title 2", body: "Idea body 2")

    visit "/"

    expect(page).to have_content "Idea title"
    expect(page).to have_content "Idea body"
    expect(page).to have_content "swill"

    expect(page).to have_content "Idea title 2"
    expect(page).to have_content "Idea body 2"
    expect(page).to have_content "swill"
  end

  xscenario "they see a truncated body if it's longer than 100 characters", js: true do
    Idea.create(title: "Idea title", body: "This is a really long body "\
      "for my great idea that I am super excited to share with the world. "\
      "I think that everyone is going to really like this great idea!")

    visit "/"

    expected = "This is a really long body for my great idea that I am super "\
    "excited to share with the world. I..."

    expect(page).to have_content "Idea title"
    expect(page).to have_content expected
    expect(page).to have_content "swill"
  end

  scenario "they see ideas in descending chronological order", js: true do
    older_idea = Idea.create(title: "Older idea", body: "Older idea body")
    newer_idea = Idea.create(title: "Newer idea", body: "Newer idea body")

    visit "/"

    expect(page.body.index(newer_idea.title)).to be < page.body.index(older_idea.title)
  end
end
