require "rails_helper"

RSpec.feature "Registered user can log in" do
  scenario "they see their dashboard" do
    user = User.create(
      username: "Registered User",
      password: "password",
      password_confirmation: "password"
    )

    visit login_path
    fill_in "Username", with: user.username
    fill_in "Password", with: "password"
    fill_in "Password confirmation", with: "password"
    click_on "Log in"

    expect(page).to have_content "Welcome #{user.username}!"
    expect(current_path).to eq user_path(user)
  end
end
