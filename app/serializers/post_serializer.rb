class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :title, :content, created_at, :user_id, :channel_id
  
  belongs_to :user
  belongs_to :channel
end