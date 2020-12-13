import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Avatar from "../Avatar";
import StatusReplyHeader from "../statuses/StatusReplyHeader";
import TweetOptions from "./TweetOptions";
import ActionHeader from "./ActionHeader";

function Tweet(props) {
  return (
    <div
      className={
        props.isReply ? "post-container" : "post-container post-border"
      }>
      {props.actionHeader && (
        <ActionHeader
          username={props.user.username}
          action={props.actionHeader}
        />
      )}
      <div className="tweet-container">
        <div className="avatar-container">
          <Avatar />
          {props.isParent && <div className="reply-connector"></div>}
        </div>
        <div className="tweet-content">
          <div className="tweet">
            <div>
              <a href={Routes.profile_path(props.tweet.user.handle)}>
                <span className={"username"}>{props.tweet.user.username}</span>
                <span className={"font-secondary handle"}>
                  {" @"}
                  {props.tweet.user.handle}
                </span>
              </a>
              <span className={"font-secondary"}>
                {" · "}
                {props.updatedAt}
              </span>
              <br />
              {/*only shows under status */}
              {props.replyingTo && (
                <StatusReplyHeader parentHandle={props.replyingTo} />
              )}
              <a
                href={Routes.status_path(
                  props.tweet.user.handle,
                  props.tweet.id
                )}>
                {props.tweet.content}
              </a>
            </div>
          </div>

          <TweetOptions
            tweetId={props.tweet.id}
            commentCount={props.tweet.children.length}
            retweetCount={props.tweet.retweets.length}
            likesCount={props.likesCount}
            isLiked={props.isLiked}
            isRetweeted={props.isRetweeted}
            isStatusOption={false}
            toggleLike={props.toggleLike}
          />
        </div>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object,
  user: PropTypes.object,
  updatedAt: PropTypes.string,
  replyingTo: PropTypes.string,
  isLiked: PropTypes.bool,
  isParent: PropTypes.bool,
  isReply: PropTypes.bool,
  isRetweeted: PropTypes.bool,
  actionHeader: PropTypes.string,
  toggleLike: PropTypes.func,
};

export default Tweet;
