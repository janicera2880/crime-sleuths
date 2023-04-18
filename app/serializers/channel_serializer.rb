class ChannelSerializer < ActiveModel::Serializer
  attributes :id, :name, :description

  has_many :posts, serializer: UserPostSerializer
end
