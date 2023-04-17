class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :title, :content, :user_id, :user
  
  belongs_to :user
  belongs_to :channel
end
