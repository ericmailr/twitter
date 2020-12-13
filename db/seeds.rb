# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create!([
    {username: "douginator", handle: "doug", email: "doug@mail.com", password: "password"}, 
    {username: "cindy500", handle: "cindy", email: "cindy@mail.com", password: "password"},
    {username: "fatmatt", handle: "matt", email: "matt@mail.com", password: "password"},
    {username: "eric", handle: "eric", email: "eric@mail.com", password: "password"}
])

Follow.create!([
    {follower_id: users[0].id, followed_user_id: users[1].id },
    {follower_id: users[2].id, followed_user_id: users[1].id },
    {follower_id: users[0].id, followed_user_id: users[2].id }
])

tweets = Tweet.create!([
    {content: "my day is bad", user_id: users[0].id},
    {content: "lost my wallet", user_id: users[0].id},
    {content: "my left foot exploded", user_id: users[0].id},
    {content: "my food is good", user_id: users[1].id},
    {content: "my food is gone", user_id: users[1].id},
    {content: "i'm full", user_id: users[1].id},
    {content: "i'm angry about politics!", user_id: users[2].id},
    {content: "the other side is dumb", user_id: users[2].id},
    {content: "i am right, u r not", user_id: users[2].id}
])

tweet_comments = Tweet.create!([
    {content: "your day is always bad", user_id: users[1].id, parent: tweets[0]},
    {content: "sorry about your day, doug", user_id: users[2].id, parent: tweets[0]},
    {content: "i stole it", user_id: users[2].id, parent: tweets[1]},
    {content: "like, real angry!", user_id: users[2].id, parent: tweets[6]}
])

retweets = Retweet.create!([
   {user_id: users[2].id, content: tweets[2].content, quote_id: tweets[2].id} 
])

quote_tweets = QuoteTweet.create!([
    {user_id: users[1].id, quote_id: tweets[2].id}
])

likes = Like.create!([
    {user_id: users[1].id, quote_id: tweets[1].id}
])
