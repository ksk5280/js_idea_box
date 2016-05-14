require "rails_helper"

RSpec.feature "User can add ideas" do
  scenario "they see new idea on page", js: true do
    visit "/"

    fill_in "Title", with: "Idea Title"
    fill_in "Body", with: "Idea Body"
    click_button "Save"

    within ".ideas" do
      expect(page).to have_content "Idea Title"
      expect(page).to have_content "Idea Body"
    end

    visit "/"
    within ".ideas" do
      expect(page).to have_content "Idea Title"
      expect(page).to have_content "Idea Body"
    end
  end

  context "they do not fill in a body" do
    scenario "they see an error message" do
      visit "/"

      fill_in "Title", with: "Idea Title"
      click_button "Save"

      expect(page).to have_content "Fill in a title and body for your idea!"
    end
  end
end
