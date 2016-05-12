require "rails_helper"

RSpec.feature "User can change the quality of an idea" do
  scenario "they see changed quality", js: true do
    Idea.create(title: "Idea title", body: "Idea body")

    visit "/"

    expect(page).to have_content "Idea title"
    expect(page).to have_content "swill"

    page.find(".thumbs-up").click
    expect(page).to have_content "plausible"

    page.find(".thumbs-up").click
    expect(page).to have_content "genius"

    page.find(".thumbs-up").click
    expect(page).to have_content "genius"

    page.find(".thumbs-down").click
    expect(page).to have_content "plausible"

    page.find(".thumbs-down").click
    expect(page).to have_content "swill"

    page.find(".thumbs-down").click
    expect(page).to have_content "swill"
  end
end
