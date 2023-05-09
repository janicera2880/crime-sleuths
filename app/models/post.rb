class Post < ApplicationRecord

# The 'belongs_to :channel' association indicates that a post belongs to a single channel. 
# The 'belongs_to :user' association indicates that a post belongs to a single user. 
# Can easily access the channel and user associated with a post, ex. post.channel or post.user.
    belongs_to :channel
    belongs_to :user

    validates :title, presence: true, uniqueness: { case_sensitive: false }
    validates :image, presence: true
    validates :content, presence: true, length: { minimum: 300 }
end
