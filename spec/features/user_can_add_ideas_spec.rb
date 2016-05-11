require "rails_helper"

RSpec.feature "User can add ideas", type: :feature do
  # include WaitForAjax

  scenario "they see new idea on page", js: true do
    visit "/"

    fill_in "Title", with: "Idea Title"
    fill_in "Body", with: "Idea Body"
    click_button "Save"

    within ".ideas" do
      expect(page).to have_content "Idea Title"
      expect(page).to have_content "Idea Body"
    end
  end
end
