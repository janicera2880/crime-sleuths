class User < ApplicationRecord
    # The 'has_many :posts' association indicates that a user has multiple posts.
    # The 'has_many :channels, through: :posts' association allows a user to access channels through their posts. 
    has_many :posts
    has_many :channels, through: :posts

    # Method to store password encrypted using bcrypt and stored in the database as a password digest.
    has_secure_password

    validates :username, presence: true, uniqueness: true, length: { minimum: 6 }
    validates :password, length: { in: 8..20 }
    validates :image_url, presence: true
    validates :bio, length: { minimum: 200 }
    validates :location, presence: true
end
