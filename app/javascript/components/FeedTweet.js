import React from "react";
import PropTypes from "prop-types";

import Avatar from "./Avatar";
import Tweet from "./tweets/Tweet";
import TweetOptions from "./tweets/TweetOptions";

function FeedTweet(props) {
  return (
    <div className="tweet-container">
      {/*add tweet-header here? */}
      <div className="avatar-container">
        <Avatar />
      </div>
      <div className="tweet-content">
        <Tweet
          tweet={props.tweet}
          tweeter={props.tweet.tweeter}
          updatedAt={props.updatedAt}
          replyingTo={props.replyingTo}
        />
        <TweetOptions
          tweetId={props.tweet.id}
          commentCount={props.tweet.children.length}
          retweetCount={props.tweet.retweets.length}
          isLiked={props.isLiked}
        />
      </div>
    </div>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object,
  tweeter: PropTypes.object,
  updatedAt: PropTypes.string,
  replyingTo: PropTypes.string,
  isLiked: PropTypes.bool,
};

export default FeedTweet;
