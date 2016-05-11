require "rails_helper"

RSpec.feature "User can add ideas" do
  scenario "they see new idea on page" do
    visit "/"

    fill_in "Title", with: "Idea Title"
    fill_in "Body", with: "Idea Body"
    click_button "Save"

# Try testing this using selenium
    # within ".ideas" do
    #   expect(page).to have_content "Idea Title"
    #   expect(page).to have_content "Idea Body"
    # end
  end
end
