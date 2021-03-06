require "rails_helper"

RSpec.feature "User can delete ideas" do
  scenario "they no longer see idea on page", js: true do
    Idea.create(title: "Idea title 1", body: "Idea body 1")
    Idea.create(title: "Idea title 2", body: "Idea body 2")

    visit "/"

    expect(page).to have_content "Idea title 1"
    expect(page).to have_content "Idea title 2"

    first('.idea').click_on "Delete"

    expect(page).to_not have_content "Idea title 2"
    expect(page).to have_content "Idea title 1"
  end
end
