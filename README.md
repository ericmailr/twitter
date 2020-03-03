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

    has_many :likes
    
follow -- id, follower_id:integer, followed_id:integer
    belongs_to :follower, class_name: "User"
    belongs_to :followed_user, class_name: "User"



tweet -- content
    belongs_to :user
    has_many :comments, as: :postable
    has_many :likes, as: :postable
    has_many :retweets, as: :postable

retweet -- postable_type:string, postable_id:integer
    belongs_to :user
    belongs_to :postable, polymorphic: true
    has_many :comments, as: :postable
    has_many :likes, as: :postable

comment -- content, postable_type:string, postable_id:integer
    belongs_to :postable, polymorphic: true
//    has_many :comments, as: :postable // use ancestry gem?
    has_many :likes, as: :postable
    has_many :retweets, as: :postable

like -- liker_id:integer, postable_type:string, postable_id:integer
    belongs_to :user 
    belongs_to :postable, polymorphic: true