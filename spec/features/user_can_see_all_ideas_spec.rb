require "rails_helper"

RSpec.feature "Use can see all ideas" do
  scenario "they see title, body, and quality for each idea" do
    idea1 = Idea.create(title: "Idea title", body: "Idea body", quality: "genius")
    idea2 = Idea.create(title: "Idea title 2", body: "Idea body 2", quality: "swill")

    visit "/"

    expect(page).to have_content "Idea title"
    expect(page).to have_content "Idea body"
    expect(page).to have_content "genius"

    expect(page).to have_content "Idea title 2"
    expect(page).to have_content "Idea body 2"
    expect(page).to have_content "swill"
  end

  scenario "they see a truncated body if it's longer than 100 characters" do
    idea = Idea.create(title: "Idea title", body: "This is a really long body "\
      "for my great idea that I am super excited to share with the world. "\
      "I think that everyone is going to really like this great idea!")

    visit "/"

    expected = "This is a really long body for my great idea that I am super "\
    "excited to share with the world. I..."

    expect(page).to have_content "Idea title"
    expect(page).to have_content expected
    expect(page).to have_content "swill"
  end

  scenario "they see ideas in descending chronological order" do
    older_idea = Idea.create(title: "Older idea", body: "Older idea body", quality: "genius")
    newer_idea = Idea.create(title: "Newer idea", body: "Newer idea body", quality: "swill")

    visit "/"

    expect(page.body.index(newer_idea.title)).to be < page.body.index(older_idea.title)
  end
end
