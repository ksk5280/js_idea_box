class Api::V1::IdeasController < ApiController
  def index
    respond_with Idea.all
  end

  def create
    respond_with Idea.create(idea_params), location: nil
  end

  def destroy
    respond_with Idea.find(params[:id]).destroy
  end

  private

    def idea_params
      params.permit(:title, :body)
    end
end
