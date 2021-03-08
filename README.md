# README

Eric Miller
Twitter clone

- Ruby version
  ruby 2.7.0p0
- Database creation
  postgresql
- Guest login: Username: guest, Password: password123

- Unimplemented Features
  /dm's
  /lists
  /explore: shows trending hashtags
  settings
  media

- Thoughts on ActiveRecord Associations setup:

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

profile avatar, background image, follow button

avatar modal

rework application.html.erb and make everything a react component

clicking on likes, retweets should pop up a modal showing users

add quote-tweet function
clicking on quote_tweets loads new page showing each one (comment plus quote)

abbreviate handles in suggested-section when too long

make search index pretty

add delete tweet option

Add signup

Expand Nav with Labels

Make back button on TopHeader not just go back a page

Work on Responsiveness

Multiple replies to one tweet in feed:
-what happens if multiple replies to one tweet? just show one reply and one reference to the parent on the feed
-replies under status: chains of replies (2+ generations) get chained with the reply connector under status, show up to 3 total tweets chained? with link below to show more?
