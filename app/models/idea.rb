class Idea < ActiveRecord::Base
  validates_presence_of :title
  validates_presence_of :body

  def truncated_body
    body.truncate(100, separator: ' ')
  end

  def self.order_by_newest_first
    order(created_at: :desc)
  end
end
