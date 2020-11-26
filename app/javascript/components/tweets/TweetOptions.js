import React from "react";
import PropTypes from "prop-types";
import Like from "./options/Like";
import Retweet from "./options/Retweet";
import Reply from "./options/Reply";

function TweetOptions(props) {
  return (
    <div className="tweet-options font-secondary">
      <Reply tweetId={props.tweetId} commentCount={props.commentCount} />
      <Retweet tweetId={props.tweetId} retweetCount={props.retweetCount} />
      <Like tweetId={props.tweetId} isLiked={props.isLiked} />
    </div>
  );
}

TweetOptions.propTypes = {
  tweetId: PropTypes.number,
  commentCount: PropTypes.number,
  retweetCount: PropTypes.number,
  isLiked: PropTypes.bool,
};

export default TweetOptions;
