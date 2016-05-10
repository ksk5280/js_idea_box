class IdeasController < ApplicationController
  def index
    @ideas = Idea.order_by_newest_first
  end
end
