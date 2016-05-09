module Api
  module V1
    class IdeasController < ApiController
      def index
        respond_with Idea.all
      end
    end
  end
end
