class UserPostSerializer < ActiveModel::Serializer
  attributes :id, :title, :channel_id, :user_id
end
