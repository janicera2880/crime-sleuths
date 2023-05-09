class UserPostSerializer < ActiveModel::Serializer
  attributes :id, :title, :short_content, :image, :channel_id, :user_id

def short_content
    object.content[0...150] + '...'
  end
end

