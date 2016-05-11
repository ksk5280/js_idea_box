require "rails_helper"

RSpec.feature "User can delete ideas" do
  scenario "they no longer see idea on page", js: true do
    idea1 = Idea.create(title: "Idea title 1", body: "Idea body 1", quality: "genius")
    idea2 = Idea.create(title: "Idea title 2", body: "Idea body 2", quality: "swill")

    visit "/"

    expect(page).to have_content "Idea title 1"
    expect(page).to have_content "Idea title 2"

    first('.idea').click_on "Delete"

    expect(page).to_not have_content "Idea title 1"
    expect(page).to have_content "Idea title 2"
  end
end
