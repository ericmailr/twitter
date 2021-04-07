# PostList
## props:
{posts}

posts.map((postHash) => {
	- .postType === "reply"
	## [PostWrapper](PostWrapper) 
		### props
		- tweet: .parent 
		- updatedAt: .parentUpdatedAt 
		- user: .post.user
		- isLiked: .isParentLiked
		- isRetweeted: isParentRetweeted
		- actionHeader: "reply" 
		- postType: "reply-parent"
	## [PostWrapper](PostWrapper)
		### props
		- tweet: .post 
		- updatedAt
		- isLiked
		- isRetweeted
		- postType: "reply"

	- .postHash.postType === "user"
	## SuggestedFollow {key, user}
	
	= else
	
	## [PostWrapper](PostWrapper) 
		### props
			- key: .post.id
			- tweet:
				- .postType != "tweet" ? .quoted_tweet : .post 
			- user: .post.user
			- updatedAt
			- isLiked
			- isRetweeted
			- actionHeader:
				- .postType != ("tweet" || "like") ? .postType : null 
			- postType

