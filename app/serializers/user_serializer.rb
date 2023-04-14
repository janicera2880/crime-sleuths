class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url, :bio, :location

  
  has_many :posts
end