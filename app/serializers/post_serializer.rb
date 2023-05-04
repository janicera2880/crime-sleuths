class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :title, :content, :user_id, :channel_id
  
  belongs_to :user
  belongs_to :channel
end