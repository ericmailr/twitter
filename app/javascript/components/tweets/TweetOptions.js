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
        props.isStatusOption
          ? "status-options font-secondary"
          : "tweet-options font-secondary"
      }>
      <Reply
        tweetId={props.tweetId}
        commentCount={props.commentCount}
        isStatusOption={props.isStatusOption}
      />
      <Retweet
        tweetId={props.tweetId}
        retweetCount={props.retweetCount}
        isStatusOption={props.isStatusOption}
        isRetweeted={props.isRetweeted}
      />
      <Like
        tweetId={props.tweetId}
        isLiked={props.isLiked}
        isStatusOption={props.isStatusOption}
        toggleLike={props.toggleLike}
        likesCount={props.likesCount}
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
  isRetweeted: PropTypes.bool,
  isStatusOption: PropTypes.bool,
  toggleLike: PropTypes.func,
  likesCount: PropTypes.number,
};

export default TweetOptions;
