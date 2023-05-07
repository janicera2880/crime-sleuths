class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url, :bio, :location

  
  has_many :posts
  has_many :channels, through: :posts

end
