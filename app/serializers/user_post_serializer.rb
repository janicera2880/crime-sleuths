class UserPostSerializer < ActiveModel::Serializer
  attributes :id, :title, :short_content, :channel_id, :user_id

def short_content
    object.content[0...100] + '...'
  end
end

