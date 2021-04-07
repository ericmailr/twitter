# MainContent

div#main-content
	## Home
	### props to Home
	- posts (array)
	OR
	## Tweet
	### props to Tweet
	- tweet (object)
	- tweetIsLiked (bool)
	
	## [Profile](Profile)

### props to [MainContent](MainContent)
- mainContentType (string)
#### either tweets#index
- posts (array)
#### OR tweets#show
- tweet (obj)
- tweetIsLiked (obj)
#### OR user#show
- posts (array)
- user (object)
- postTypes (string)

