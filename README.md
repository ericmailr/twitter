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
has_many :tweets
has_many :likes
has_many :retweets

retweet -- retweeter_id
belongs_to :retweeter, class_name: "User"
belongs_to :tweet
has_many :tweets //nevermind, this is solved with ancestry gem
has_many :likes

like -- liker_id:integer, tweet_id
belongs_to :liker, class_name: "User"

DRY: Don't Repeat Yourself

CHANGING TWEET MODEL SETUP

just make them all tweets... simplifying ancestry stuff. new columns for quote_id
content is nil for retweets

(Cons: all the same class, empty extra columns)

OR

Single Table Inheritance with subclasses
Tweets Retweets and QuoteTweets are subclasses of Post (post is what tweet is now)
(Cons: empty extra columns)

Potentially overkill...?
What is the benefit over just leaving inheritance out of it and just removing Retweet/QuoteTweet classes?
It does seem easier to grab retweets, quote_tweets without needing another column for og tweet id to find quote_tweets since they're all the same class. Very small benefit though.

OR

NOT COMING UNTIL RAILS 6.1
Rails Delegated types? STI with delegated child companion object
https://belighted.com/blog/implementing-multiple-table-inheritance-in-rails
https://github.com/rails/rails/pull/39341

TODO NEXT:

Issue: Can retweet things more than once. if already retweeted, drop down to undo retweet

Eventually I need to figure out my sessions, current_user. As of now, I can't logout of one and back in as another and have it show what it should.
