require 'rails_helper'

RSpec.describe Idea, type: :model do
  it { should validate_presence_of :title }
  it { should validate_presence_of :body }

  it "defaults to swill for quality" do
    idea = Idea.create(title: "Idea title", body: "Idea body")

    expect(idea.quality).to eq "swill"
  end
end
