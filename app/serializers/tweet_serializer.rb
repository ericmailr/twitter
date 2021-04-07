class TweetSerializer < ActiveModel::Serializer
  attributes :id, :content, :updated_at, :updated_at_brief, :updated_at_full, :children, :user, :retweets, :likes, :quote_tweets
  
  def updated_at_brief
    return ApplicationHelper.tweet_updated_at_formatted_brief(object.updated_at)
  end
  
  def updated_at_full
    return ApplicationHelper.tweet_updated_at_formatted_full(object.updated_at)
  end
  
  def user
    return UserSerializer.new(object.user)
  end

end