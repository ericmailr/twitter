import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import Avatar from "./../Avatar";
import Tweet from "./Tweet";
import TweetOptions from "./TweetOptions";
//VERY similar to FeedTweet. In FeedTweet: check if tweet has parent,
//      if so add parent with child in reply-container, and add reply-connector to parent's avatar connector
function Reply(props) {
  return (
    <div className="reply-container">
      <div className="tweet-container">
        <div className="avatar-container">
          <Avatar />
          <div className="reply-connector"></div>
        </div>
        <div className="tweet-content">
          <Tweet
            tweet={props.parent}
            tweeter={props.parent.tweeter}
            updatedAt={props.parentUpdatedAt}
          />
          <TweetOptions
            tweetId={props.parent.id}
            commentCount={props.parent.children.length}
            retweetCount={props.parent.retweets.length}
            isLiked={props.parentIsLiked}
          />
        </div>
      </div>

      <div className="tweet-container">
        <div className="avatar-container">
          <Avatar />
        </div>
        <div className="tweet-content">
          <Tweet
            tweet={props.reply}
            tweeter={props.reply.tweeter}
            updatedAt={props.replyUpdatedAt}
          />
          <TweetOptions
            tweetId={props.reply.id}
            commentCount={props.reply.children.length}
            retweetCount={props.reply.retweets.length}
            isLiked={props.replyIsLiked}
          />
        </div>
      </div>
    </div>
  );
}

Reply.propTypes = {
  reply: PropTypes.object,
  replyUpdatedAt: PropTypes.string,
  replyIsLiked: PropTypes.bool,
  parent: PropTypes.object,
  parentUpdatedAt: PropTypes.string,
  parentIsLiked: PropTypes.bool,
};

export default Reply;
