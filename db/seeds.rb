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
    {username: "Eric Miller", handle: "eric", email: "eric@mail.com", password: "password"},
    {username: "guest", handle: "hiring_team", email: "recruiter@mail.com", password: "password123"},
    {username: "google_webdev", handle: "dont_be_evil", email: "google@mail.com", password: "password"},
    {username: "microsoft", handle: "bill_in_the_flesh", email: "bill@mail.com", password: "password"},
    {username: "pro_webdev", handle: "webdev_inc", email: "webdev@mail.com", password: "password"}
])

Follow.create!([
    {follower_id: users[0].id, followed_user_id: users[1].id },
    {follower_id: users[1].id, followed_user_id: users[3].id },
    {follower_id: users[2].id, followed_user_id: users[1].id },
    {follower_id: users[1].id, followed_user_id: users[2].id },
    {follower_id: users[0].id, followed_user_id: users[2].id },
    {follower_id: users[4].id, followed_user_id: users[5].id },
    {follower_id: users[4].id, followed_user_id: users[6].id },
    {follower_id: users[4].id, followed_user_id: users[7].id }
])

tweets = Tweet.create!([
    {content: "my day is bad", user_id: users[0].id},
    {content: "lost my wallet", user_id: users[0].id},
    {content: "my left foot exploded", user_id: users[0].id},
    {content: "my food is good", user_id: users[1].id},
    {content: "i'm full", user_id: users[1].id},
    {content: "i'm angry about politics!", user_id: users[2].id},
    {content: "the other side is dumb", user_id: users[2].id},
    #{content: "Eric Miller might be the greatest web developer on the planet.", user_id: users[5].id},
    #{content: "Just offered Eric Miller a position on our webdev team, $2mil / year. He's that good. Hope he accepts.", user_id: users[6].id},
    #content: "This Eric Miller fella is a straight shooter.", user_id: users[7].id},
    #{content: "Just ate a burrito. 10/10. Just like Eric Miller", user_id: users[5].id},
    #{content: "Imagine if you had bought Gamestop at like 25 bucks a share. Guess what, you don't have to. Hire Eric Miller, you'll see similar returns", user_id: users[7].id},
    #{content: "Have feedback on Eric's Twitter Clone or another project? He'd love to hear! Leave it below... or anywhere on this site.", user_id: users[6].id},
    #{content: "Spent the day with my family and friends at Disneyland. Wish I had just spent it making websites with Eric Miller instead.", user_id: users[7].id},
    #{content: "Achieved Enlightenment today. All I did was go to one of Eric Miller's websites. Kinda cool.", user_id: users[7].id},
    #{content: "Profits for our company went up 234230% after hiring Eric Miller. Not bad.", user_id: users[5].id},
    #{content: "Hmmm. Maye I should hire Eric Miller... Yes, I think I will.", user_id: users[4].id}
    #
    {content: "Check out the webdev curriculum I finished at https://www.theodinproject.com/paths", user_id: users[3].id},
    {content: "Just ate a burrito. 10/10.", user_id: users[6].id},
    {content: "This Eric Miller fella is a straight shooter.", user_id: users[7].id},
    {content: "Looking into Single Table Inheritance and Delegated Types with Rails right now.", user_id: users[5].id},
    {content: "Have a good day everyone!", user_id: users[7].id},
    {content: "Have feedback on my Twitter Clone or another project? He'd love to hear! Leave it below... or anywhere on this site.", user_id: users[3].id},
    {content: "Spent the day with my family and friends at Disneyland. Wish I had just spent it making websites with Eric Miller instead.", user_id: users[7].id},
    {content: "Check out this etch-a-sketch javascript app I made: https://ericmailr.github.io/etchsketch/", user_id: users[3].id},
    {content: "One step at a time.", user_id: users[5].id},
    {content: "Hmmm. Maye I should hire Eric Miller... Yes, I think I will.", user_id: users[4].id}

])

tweet_comments = Tweet.create!([
    {content: "your day is always bad", user_id: users[1].id, parent: tweets[0]},
    {content: "sorry about your day, doug", user_id: users[2].id, parent: tweets[0]},
    {content: "i stole it", user_id: users[2].id, parent: tweets[1]},
    {content: "like, real angry!", user_id: users[2].id, parent: tweets[5]}
])

retweets = Retweet.create!([
   {user_id: users[6].id, content: tweets[11].content, quote_id: tweets[11].id},
   {user_id: users[7].id, content: tweets[11].content, quote_id: tweets[11].id},
   {user_id: users[5].id, content: tweets[13].content, quote_id: tweets[13].id},
   {user_id: users[6].id, content: tweets[9].content, quote_id: tweets[9].id},
   {user_id: users[5].id, content: tweets[10].content, quote_id: tweets[10].id}
])

quote_tweets = QuoteTweet.create!([
    {user_id: users[1].id, quote_id: tweets[2].id}
])

likes = Like.create!([
    {user_id: users[1].id, quote_id: tweets[1].id},
    {user_id: users[6].id, quote_id: tweets[10].id},
    {user_id: users[5].id, quote_id: tweets[10].id},
    {user_id: users[7].id, quote_id: tweets[10].id},
    {user_id: users[7].id, quote_id: tweets[8].id},
    {user_id: users[6].id, quote_id: tweets[9].id},
    {user_id: users[6].id, quote_id: tweets[15].id},
    {user_id: users[7].id, quote_id: tweets[15].id},
    {user_id: users[5].id, quote_id: tweets[12].id}
])
