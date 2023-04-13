class Channel < ApplicationRecord
    # By using 'through: :posts', Rails is able to generate SQL queries that efficiently retrieve users associated with a post, or posts associated with a user.
    has_many :posts
    has_many :users, through: :posts

    validates :name, presence: true, uniqueness: { case_sensitive: false }
    validates :description, presence: true, length: { maximum: 500 }
end
