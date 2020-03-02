# README
Eric Miller
A rebuild of Twitter with core features.

* Ruby version
    ruby 2.3.4p301
* Database creation
    sqlite

* How I set up my ActiveRecord Associations:

user -- id, username, email
    has_many :tweets

    has_many :received_follows, foreign_key: :followed_id, class_name: "Follow" 
    has_many :followers, through: :received_follows

    has_many :given_follows, foreign_key: follower_id, class_name: "Follow"
    has_many :followed_users, through: :given_follows

    has_many :liked_tweets
    
follow -- id, follower_id:integer, followed_id:integer
    belongs_to :follower, class_name: "User"
    belongs_to :followed_user, class_name: "User"

tweet -- content, date/time
    belongs_to :user
    has_many :comments
    has_many :likes, as: :post
    has_many :retweets

comment -- content, date/time
    belongs_to :post
    has_many :likes, as: :post

like -- liker_id:integer, post_type:string, post_id:integer
    belongs_to :user
    belongs_to :post, polymorphic: true