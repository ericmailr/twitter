import React from "react";
import PropTypes from "prop-types";
import Like from "./options/Like";
import Retweet from "./options/Retweet";
import Reply from "./options/Reply";
import Share from "./options/Share";

function TweetOptions(props) {
  return (
    <div
      className={
        //consider changing omitCount to statusOption? (more aptly named)
        props.omitCount
          ? "status-options font-secondary"
          : "tweet-options font-secondary"
      }>
      <Reply
        tweetId={props.tweetId}
        commentCount={props.commentCount}
        omitCount={props.omitCount}
      />
      <Retweet
        tweetId={props.tweetId}
        retweetCount={props.retweetCount}
        omitCount={props.omitCount}
        isRetweeted={props.isRetweeted}
      />
      <Like
        tweetId={props.tweetId}
        isLiked={props.isLiked}
        omitCount={props.omitCount}
      />
      <Share tweetId={props.tweetId} />
    </div>
  );
}

TweetOptions.propTypes = {
  tweetId: PropTypes.number,
  commentCount: PropTypes.number,
  retweetCount: PropTypes.number,
  isLiked: PropTypes.bool,
  omitCount: PropTypes.bool,
};

export default TweetOptions;
