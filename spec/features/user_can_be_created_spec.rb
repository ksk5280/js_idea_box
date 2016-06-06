require "rails_helper"

RSpec.feature "User can create an account" do
  scenario "they see dashboard with a welcome message" do
    visit "/"

    click_on "Create Account"
    expect(current_path).to eq "/users/new"

    expect(page).to have_content "Log In or Sign Up"

    fill_in "Username", with: "New User"
    fill_in "Password", with: "password"
    fill_in "Password confirmation", with: "password"
    click_on "Submit"

    user = User.last

    expect(current_path).to eq "/users/#{user.id}"
    expect(page).to have_content "Welcome New User!"
  end
end
