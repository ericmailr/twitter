# App

div#container
	if !current_user
		## Login
			### props to Login
			- authenticy_token (string)
			- flash (string)
		
	else
		div#main-container
			## Nav
				### props to Nav
				- user (object): current_user
			## [MainContent](MainContent)
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
			## [DiscoverSection](DiscoverSection)
				### props to DiscoverSection
				- followable_users (array): for SuggestedSection
				div#search-container
		## Modal
			div#modal-container
			

## props 
#### general
- current_user (object)
- authenticity_token (string)
- flash (string)
- mainContentType (string)
#### tweets#index
- posts (array)
#### tweets#show
- tweet (obj)
- tweetIsLiked (bool)
#### user#show
- user (object)
- postTypes (string)
#### discover
- followable_users (array)
