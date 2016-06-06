FactoryGirl.define do
  factory :user do
    username "MyString"
    password "MyString"
  end
  factory :idea do
    title "Title"
    body "Body"
    quality "swill"
  end
end
