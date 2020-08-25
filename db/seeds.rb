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
    {content: "my day is bad", tweeter_id: users[0].id},
    {content: "lost my wallet", tweeter_id: users[0].id},
    {content: "my left foot exploded", tweeter_id: users[0].id},
    {content: "my food is good", tweeter_id: users[1].id},
    {content: "my food is gone", tweeter_id: users[1].id},
    {content: "i'm full", tweeter_id: users[1].id},
    {content: "i'm angry about politics!", tweeter_id: users[2].id},
    {content: "the other side is dumb", tweeter_id: users[2].id},
    {content: "i am right, u r not", tweeter_id: users[2].id}
])

tweet_comments = Tweet.create!([
    {content: "your day is always bad", tweeter_id: users[1].id, parent: tweets[0]},
    {content: "sorry about your day, doug", tweeter_id: users[2].id, parent: tweets[0]},
    {content: "i stole it", tweeter_id: users[2].id, parent: tweets[1]},
    {content: "like, real angry!", tweeter_id: users[2].id, parent: tweets[6]}
])

likes = Like.create!([
    {liker_id: users[0].id, tweet_id: tweets[1].id}
])