import React from "react";
import PropTypes from "prop-types";
import Like from "./options/Like";
import Retweet from "./options/Retweet";
import Reply from "./options/Reply";
import Share from "./options/Share";

function TweetOptions(props) {
  const mouseEnterColor = (e) => {
    let tweetOption = e.currentTarget.firstChild.firstChild.classList[1].slice(
      0,
      -4
    );
    e.currentTarget.style.color = `rgb(var(--${tweetOption}-color))`;
    e.currentTarget.firstChild.style.backgroundColor = `rgba(var(--${tweetOption}-color), 0.1)`;
    e.currentTarget.firstChild.classList.add("svg-hover");
  };

  const mouseLeaveColor = (e) => {
    e.currentTarget.style.color = "";
    e.currentTarget.firstChild.style.backgroundColor = "";
    e.currentTarget.firstChild.classList.remove("svg-hover");
  };

  return (
    <div
      className={
        props.isStatusOption
          ? "status-options font-secondary"
          : "tweet-options font-secondary"
      }>
      <Reply
        tweet={props.tweet}
        tweetId={props.tweet.id}
        commentCount={props.commentCount}
        isStatusOption={props.isStatusOption}
        updatedAt={props.updatedAt}
        mouseEnterColor={mouseEnterColor}
        mouseLeaveColor={mouseLeaveColor}
      />
      <Retweet
        tweetId={props.tweet.id}
        retweetsCount={props.retweetsCount}
        toggleRetweet={props.toggleRetweet}
        isStatusOption={props.isStatusOption}
        isRetweeted={props.isRetweeted}
        mouseEnterColor={mouseEnterColor}
        mouseLeaveColor={mouseLeaveColor}
      />
      <Like
        tweetId={props.tweet.id}
        isLiked={props.isLiked}
        isStatusOption={props.isStatusOption}
        toggleLike={props.toggleLike}
        likesCount={props.likesCount}
        mouseEnterColor={mouseEnterColor}
        mouseLeaveColor={mouseLeaveColor}
      />
      <Share
        tweetId={props.tweet.id}
        mouseEnterColor={mouseEnterColor}
        mouseLeaveColor={mouseLeaveColor}
      />
    </div>
  );
}

TweetOptions.propTypes = {
  tweet: PropTypes.object,
  commentCount: PropTypes.number,
  isLiked: PropTypes.bool,
  isRetweeted: PropTypes.bool,
  isStatusOption: PropTypes.bool,
  toggleLike: PropTypes.func,
  likesCount: PropTypes.number,
  toggleRetweet: PropTypes.func,
  retweetsCount: PropTypes.number,
  newParent: PropTypes.object,
  updatedAt: PropTypes.string,
};

export default TweetOptions;
