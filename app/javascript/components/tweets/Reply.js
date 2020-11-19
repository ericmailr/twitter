import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import Avatar from "./../Avatar";
import Tweet from "./Tweet";
import TweetOptions from "./TweetOptions";

function Reply(props) {
  return (
    <div className="reply-container">
      <div className="tweet-container reply-parent">
        <Avatar />
        <Tweet
          tweet={props.parent}
          tweeter={props.parentTweeter}
          updatedAt={props.parentUpdatedAt}
        />
      </div>
      <TweetOptions
        tweetId={props.parent.id}
        commentCount={props.parentCommentCount}
        retweetCount={props.parentRetweetCount}
      />

      <div className="tweet-container">
        <Avatar />
        <Tweet
          tweet={props.reply}
          tweeter={props.replyTweeter}
          updatedAt={props.replyUpdatedAt}
        />
      </div>
      <TweetOptions
        tweetId={props.reply.id}
        commentCount={props.replyCommentCount}
        retweetCount={props.replyRetweetCount}
      />
    </div>
  );
}

Reply.propTypes = {
  reply: PropTypes.object,
  replyTweeter: PropTypes.object,
  replyCommentCount: PropTypes.number,
  replyRetweetCount: PropTypes.number,
  replyUpdatedAt: PropTypes.string,
  parent: PropTypes.object,
  parentTweeter: PropTypes.object,
  parentCommentCount: PropTypes.number,
  parentRetweetCount: PropTypes.number,
  parentUpdatedAt: PropTypes.string,
};

export default Reply;
