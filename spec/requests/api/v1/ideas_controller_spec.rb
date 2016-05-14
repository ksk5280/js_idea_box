require "rails_helper"

RSpec.describe Api::V1::IdeasController, type: :controller do
  it "responds to json" do
    get :index, format: :json
    expect(response).to be_success
  end

  it "index returns an array of records" do
    get :index, format: :json
    json_response = JSON.parse(response.body)

    expect(json_response).to be_a_kind_of Array
  end

  it "shows all ideas" do
    idea1 = Idea.create(title: "Idea title", body: "Idea body", quality: "genius")
    idea2 = Idea.create(title: "Idea title 2", body: "Idea body 2", quality: "swill")
    get :index, format: :json

    expect(response).to be_success
  end
end
