require "rails_helper"

RSpec.feature "User can edit ideas" do
  scenario "they can edit title", js: true do
    Idea.create(title: "Original Title", body: "Idea body")

    visit "/"

    expect(page).to have_content "Original Title"
    input = find_by_id("1-title")
    input.set("Updated Title")
    input.native.send_keys(:return)

    expect(page).to have_content "Updated Title"
  end

  scenario "they can edit body", js: true do
    Idea.create(title: "Title", body: "Original idea body")

    visit "/"

    expect(page).to have_content "Original idea body"
    input = find_by_id("1-body")
    input.set("Updated Body")
    input.native.send_keys(:return)

    expect(page).to have_content "Updated Body"
  end
end
