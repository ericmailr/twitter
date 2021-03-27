# component design

# [application.html.erb](application)


## [App](App)
	## Login
	## Nav
	## [Home](Home) {posts}
		## TopHeader
		## NewTweet
		## [PostList](PostList) {posts}
			## [PostWrapper](PostWrapper) {tweet, updatedAt, user, isLiked, isRetweeted, actionHeader, postType}
				## [Status](Status)
					## [TweetOptions](TweetOptions)
						### mouseEnterColor, mouseLeaveColor	
						## Reply
							## ComposeModal
						## Retweet
						## Like
						## Share
				*OR*
				## Tweet
					## Avatar
					## StatusReplyHeader
					## TweetOptions
						-diff than Status Tweet Options: isStatusOption and updatedAtBrief
			*OR*
			## SuggestedFollow {key, user}
	## TweetPage
		## TopHeader
		## PostWrapper
		for each child:
		## PostWrapper
	## [Profile](Profile)
	
		## TopHeader
		
		## FollowList
			## TopHeader
			
			## PostList
		*OR*
		
		## ProfilePostList
			## ProfileCard
			
			## PostList
