import React from "react";
import PropTypes from "prop-types";

function TweetOptions(props) {
  return (
    <div className="tweet-options font-secondary">
      <a href={Routes.new_tweet_path({ parent_id: props.tweetId })}>
        {" "}
        c {props.commentCount}
      </a>
      <a href={Routes.new_retweet_path({ tweet_id: props.tweetId })}>
        {" "}
        r {props.retweetCount}
      </a>
    </div>
  );
}

TweetOptions.propTypes = {
  tweetId: PropTypes.number,
  commentCount: PropTypes.number,
  retweetCount: PropTypes.number,
};

export default TweetOptions;
