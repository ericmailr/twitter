# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create!([
    {username: "doug", email: "doug@mail.com", password: "password"}, 
    {username: "cindy", email: "cindy@mail.com", password: "password"},
    {username: "matt", email: "matt@mail.com", password: "password"}
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

comments = Comment.create!([
    {content: "you're right, bad day for you", post_type: "Tweet", post_id: tweets[0].id, commenter_id: users[2].id},
    {content: "no, your food is bad", post_type: "Tweet", post_id: tweets[3].id, commenter_id: users[0].id}
])

Comment.create! :content => "i don't like you doug", :post_type => "Comment", :post_id => comments[1].id, :commenter_id => users[2].id, :parent => comments[1]


likes = Like.create!([
    {liker_id: users[0].id, post_type: "Tweet", post_id: tweets[1].id},
    {liker_id: users[2].id, post_type: "Comment", post_id: comments[0].id}
])