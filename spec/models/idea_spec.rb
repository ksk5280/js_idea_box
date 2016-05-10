require 'rails_helper'

RSpec.describe Idea, type: :model do
  it { should validate_presence_of :title }
  it { should validate_presence_of :body }

  it "defaults to swill for quality" do
    idea = Idea.create(title: "Idea title", body: "Idea body")

    expect(idea.quality).to eq "swill"
  end

  it "truncates body to nearest word to 100 characters" do
    idea = Idea.create(title: "Idea title", body: "This is a really long body "\
      "for my great idea that I am super excited to share with the world. "\
      "I think that everyone is going to really like this great idea!")

    truncated_string = "This is a really long body for my great idea that I am "\
    "super excited to share with the world. I..."

    expect(idea.truncated_body).to eq truncated_string
  end

  it "orders ideas with newest first" do
    older_idea = Idea.create(title: "Older idea", body: "Older idea body", quality: "genius")
    newer_idea = Idea.create(title: "Newer idea", body: "Newer idea body", quality: "swill")

    expect(Idea.order_by_newest_first.first).to eq newer_idea
    expect(Idea.order_by_newest_first.last).to eq older_idea
  end
end
