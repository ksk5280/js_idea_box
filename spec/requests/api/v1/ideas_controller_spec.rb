require "rails_helper"

RSpec.describe "GET api/v1/ideas" do
  it "shows all ideas" do
    idea1 = Idea.create(title: "Idea title", body: "Idea body", quality: "genius")
    idea2 = Idea.create(title: "Idea title 2", body: "Idea body 2", quality: "swill")

    get "/api/v1/ideas"

    expect(response).to be_success

  end
end
