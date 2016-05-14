require "rails_helper"

RSpec.describe "GET api/v1/ideas" do
  it "responds to json" do
    get "/api/v1/ideas"
    expect(response).to be_success
  end

  it "index returns an array of records" do
    get "/api/v1/ideas"

    expect(json_response).to be_a_kind_of Array
  end

  it "shows all ideas" do
    idea1 = Idea.create(title: "Idea title 1", body: "Idea body 1")
    idea2 = Idea.create(title: "Idea title 2", body: "Idea body 2")
    get "/api/v1/ideas"

    expect(json_response[0]["title"]).to eq "Idea title 1"
    expect(json_response[0]["body"]).to eq "Idea body 1"
    expect(json_response[1]["title"]).to eq "Idea title 2"
    expect(json_response[1]["body"]).to eq "Idea body 2"
  end

  it "creates idea" do
    params = { title: "Created title", body: "Created body" }

    post "/api/v1/ideas", params.to_json, { 'CONTENT_TYPE' => 'application/json', 'ACCEPT' => 'application/json' }

    expect(json_response["title"]).to eq "Created title"
    expect(json_response["body"]).to eq "Created body"
    expect(json_response["quality"]).to eq "swill"
  end

  it "responds with errors if idea title is missing" do
    params = { body: "Idea body" }

    post "/api/v1/ideas", params.to_json, { 'CONTENT_TYPE' => 'application/json', 'ACCEPT' => 'application/json' }

    expect(json_response["errors"]).to eq({"title"=>["can't be blank"]})
  end

  it "responds with errors if idea body is missing" do
    params = { title: "Idea title" }

    post "/api/v1/ideas", params.to_json, { 'CONTENT_TYPE' => 'application/json', 'ACCEPT' => 'application/json' }

    expect(json_response["errors"]).to eq({"body"=>["can't be blank"]})
  end

  it "responds with errors if title and body are missing" do
    params = { }

    post "/api/v1/ideas", params.to_json, { 'CONTENT_TYPE' => 'application/json', 'ACCEPT' => 'application/json' }
    expect(json_response["errors"]).to eq({"title"=>["can't be blank"], "body"=>["can't be blank"]})
  end

  it "can update ideas" do
    idea = Idea.create(title: "Idea title", body: "Idea body")

    params = { title: "New title", body: "New body" }

    post "/api/v1/ideas", params.to_json, { method: :update, 'CONTENT_TYPE' => 'application/json', 'ACCEPT' => 'application/json' }

    expect(json_response["title"]).to eq "New title"
    expect(json_response["body"]).to eq "New body"
  end

  it "responds with errors if idea title and body are blank when updating" do
    params = { title: "", body: "" }

    post "/api/v1/ideas", params.to_json, { method: :update, 'CONTENT_TYPE' => 'application/json', 'ACCEPT' => 'application/json' }

    expect(json_response["errors"]).to eq({"title"=>["can't be blank"], "body"=>["can't be blank"]})
  end
end
