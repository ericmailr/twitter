# README

Eric Miller
A rebuild of Twitter with core features.

- Ruby version
  ruby 2.3.4p301
- Database creation
  sqlite

- Todo Next

Shoulda just left comments out of it... just tweets with ancestry gem

- Features / Structure

/signup: hit next, sent you verification code (enter it) skip this for now.

/home: tweets index
/notifications: mentions
/bookmarks: extra liked tweets
/username (profile): tweets tab, comments tab (instead of "tweets & replies" maybe), likes tab
search?
who to follow

- Unimplemented Features
  /dm's
  /lists
  /explore: shows trending hashtags
  settings
  no media

- How I set up my ActiveRecord Associations:

user -- id, username, email, password_digest
has_many :tweets

    has_many :received_follows, foreign_key: :followed_id, class_name: "Follow"
    has_many :followers, through: :received_follows

    has_many :given_follows, foreign_key: follower_id, class_name: "Follow"
    has_many :followed_users, through: :given_follows

    has_many :likes

follow -- id, follower_id:integer, followed_user_id:integer
belongs_to :follower, class_name: "User"
belongs_to :followed_user, class_name: "User"

tweet -- content, tweeter_id
belongs_to :tweeter, class_name: "User"
has_many :comments, as: :post
has_many :likes, as: :post
has_many :retweets, as: :post

retweet -- post_type:string, post_id:integer, retweeter_id
belongs_to :retweeter, class_name: "User"
belongs_to :post, polymorphic: true
has_many :comments, as: :post
has_many :likes, as: :post

like -- liker_id:integer, tweet_id
belongs_to :liker, class_name: "User"

//belongs_to :post, polymorphic: true

Should I have a post model?
