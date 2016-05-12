require "rails_helper"

RSpec.feature "User can change the quality of an idea" do
  scenario "they see changed quality", js: true do
    Idea.create(title: "Idea title", body: "Idea body")

    visit "/"

    expect(page).to have_content "Idea title"
    expect(page).to have_content "swill"

    click_on "thumbs up"
    expect(page).to have_content "plausible"

    click_on "thumbs up"
    expect(page).to have_content "genius"

    click_on "thumbs up"
    expect(page).to have_content "genius"

    click_on "thumbs down"
    expect(page).to have_content "plausible"

    click_on "thumbs down"
    expect(page).to have_content "swill"

    click_on "thumbs down"
    expect(page).to have_content "swill"
  end
end
