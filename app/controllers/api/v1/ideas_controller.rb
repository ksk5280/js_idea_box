class Api::V1::IdeasController < ApiController
  def index
    respond_with Idea.all
  end

  def create
    respond_with Idea.create(idea_params), location: nil
  end

  def update
    # binding.pry
    idea = Idea.find(params[:id])
    respond_with idea.update(idea_params)
  end

  def destroy
    respond_with Idea.find(params[:id]).destroy
  end

  private

    def idea_params
      params.permit(:title, :body, :quality)
    end
end
