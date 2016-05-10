class Api::V1::Serializers::IdeaSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :quality
end
