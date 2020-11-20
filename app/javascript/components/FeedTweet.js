import React from "react";
import PropTypes from "prop-types";

import Avatar from "./Avatar";
import Tweet from "./tweets/Tweet";
import TweetOptions from "./tweets/TweetOptions";

function FeedTweet(props) {
  return (
    <div className="feed-tweet">
      <div className="tweet-container">
        <div className="avatar-container">
          <Avatar />
        </div>
        <Tweet
          tweet={props.tweet}
          tweeter={props.tweeter}
          updatedAt={props.updatedAt}
          replyingTo={props.replyingTo}
          parent={props.parent}
        />
      </div>
      <TweetOptions
        tweetId={props.tweet.id}
        commentCount={props.commentCount}
        retweetCount={props.retweetCount}
      />
    </div>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object,
  tweeter: PropTypes.object,
  updatedAt: PropTypes.string,
  replyingTo: PropTypes.string,
  parent: PropTypes.object,
  commentCount: PropTypes.number,
  retweetCount: PropTypes.number,
};

export default FeedTweet;
