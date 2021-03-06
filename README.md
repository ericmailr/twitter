# README

Eric Miller
Twitter clone

- Ruby version
  ruby 2.3.4p301
- Database creation
  sqlite

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

profile avatar, background image

signout popup

FIX SESSIONS

rework application.html.erb and make everything a react component

add quote-tweet function

fix search

add delete tweet option

Add signup

Expand Nav with Labels

Fix back button on TopHeader to not just go back a page

Work on Responsiveness

Click on reply, should show reply STATUS with parent TWEET connected above... page scrolled to reply.
-add isReply to Tweet?

Multiple replies to one tweet in feed:
-what happens if multiple replies to one tweet? just show one reply and one reference to the parent on the feed
-replies under status: chains of replies (2+ generations) get chained with the reply connector under status, show up to 3 total tweets chained? with link below to show more?

Eventually I need to figure out my sessions, current_user. As of now, I can't logout of one and back in as another and have it show what it should.
