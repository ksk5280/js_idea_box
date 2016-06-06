require "rails_helper"

RSpec.feature "User can logout" do
  scenario "they are redirected to login page" do
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

    visit "/"
    click_on "Log out"

    expect(current_path).to eq login_path
    expect(page).to have_content "Login"
  end
end
