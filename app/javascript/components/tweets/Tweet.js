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
      }
      style={props.newReply && { paddingTop: "10px" }}>
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
              <div>
                <a href={Routes.profile_path(props.tweet.user.handle)}>
                  <span className={"username"}>
                    {props.tweet.user.username}
                  </span>
                  <span className={"font-secondary handle"}>
                    {" @"}
                    {props.tweet.user.handle}
                  </span>
                </a>
                <span className={"font-secondary"}>
                  {" · "}
                  {props.updatedAt}
                </span>
              </div>
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
          {props.newReply && (
            <span style={{ padding: "15px 0" }}>
              <StatusReplyHeader parentHandle={props.tweet.user.handle} />
            </span>
          )}
          {!props.hideOptions && (
            <TweetOptions
              tweet={props.tweet}
              updatedAt={props.updatedAt}
              commentCount={props.tweet.children.length}
              retweetsCount={props.retweetsCount}
              likesCount={props.likesCount}
              isLiked={props.isLiked}
              isRetweeted={props.isRetweeted}
              isStatusOption={false}
              toggleLike={props.toggleLike}
              toggleRetweet={props.toggleRetweet}
            />
          )}
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
  hideOptions: PropTypes.bool,
  newReply: PropTypes.bool,
};

export default Tweet;
