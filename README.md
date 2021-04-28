# Twitter Clone

Eric Miller

![Twitter Clone Screenshot](./app/assets/images/twitter.png)

[Try it out here](https://twitter-clone-ericmiller.herokuapp.com/)

- Guest login: Username: guest, Password: password123
- Ruby version: 2.7.3
- Database: postgresql

## Implemented Features

- Tweets
- Replies
- Likes
- Retweets
- Follow other users
- See profiles
- Search posts
- Signup

## Features in progress

- Quote Tweets
- Edit Avatar Image
- User popups on hover
- media
- dm

## My todo list

- [ ] Heroku
  - [ ] Learn management tools
- [o] Login
  - [x] fix login page on mobile
  - [x] [Devise](Devise)
  - [ ]
- [ ] Cloudinary
  - [ ] create ENV variables with figaro for cloudinary.yml
- [ ] Signup page
  - [ ] Forgot my password
    - [ ]
  - [ ] Refactor Signup, FormInput, Button
- [ ] Profile
  - [ ] avatar,
  - [ ] background image
  - [ ] follow button
  - [ ] Avatar popup on mouseover
  - [ ] Make back button on TopHeader not just go back a page
- [ ] current_user avatar in newtweet should link to profile
- [ ] mobile
  - [ ] current_user avatar in newtweet should open navigation as a modal halfway across the screen
- [ ] Tweet
  - [ ] delete option
- [ ] Status
  - [ ] likes, retweets should pop up a modal showing whodunnit
- [ ] QuoteTweet
  - [ ] add option
  - [ ] clicking on quote_tweets loads new page showing each one (comment plus quote)
- [ ] Nav
  - [ ] Expand Nav with Labels
  - [ ] Don't re-render nav when navigating different links
- [ ] Search
  - [ ] make a pretty results page
  - [ ] make sure it's returning the right results
- [ ] RSpec
- [ ] Responsive
  - [ ] firefox
  - [ ] mobile
  - [ ] i.e.? maybe
- [ ] React
  - [ ] refactor
  - [ ] Learn Higher Order Components, implement if applicable
  - [ ] work on efficiency
- [ ] Misc
  - [ ] Learn TypeScript, rewrite
  - [ ] Multiple replies to one tweet in feed:
    - [ ] what happens if multiple replies to one tweet? just show one reply and one reference to the parent on the feed
    - [ ] replies under status: chains of replies (2+ generations) get chained with the reply connector under status, show up to 3 total tweets chained? with link below to show more?

## Project Design Notes

### Thoughts on ActiveRecord Associations setup:

Single Table Inheritance with subclasses
Tweets Retweets QuoteTweets Likes are subclasses of Post
(Cons: empty extra columns)
Potentially overkill...?
What is the benefit over just leaving inheritance out of it and just removing Retweet/QuoteTweet classes?

OR

NOT COMING UNTIL RAILS 6.1
Rails Delegated types? STI with delegated child companion object
https://belighted.com/blog/implementing-multiple-table-inheritance-in-rails
https://github.com/rails/rails/pull/39341
