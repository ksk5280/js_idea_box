class Api::V1::IdeasController < ApiController
  def index
    respond_with Idea.all
  end

  def create
    @idea = Idea.create(idea_params)
    respond_with :api, :v1, @idea, location: nil
  end

  private

    def idea_params
      params.permit(:title, :body)
    end
end
