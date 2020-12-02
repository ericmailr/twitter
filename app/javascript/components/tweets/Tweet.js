import React from "react";
import PropTypes from "prop-types";

import Avatar from "../Avatar";
import StatusReplyHeader from "../statuses/StatusReplyHeader";
import TweetOptions from "./TweetOptions";

function Tweet(props) {
  return (
    <div className="tweet-container">
      {/*add tweet-header here? */}
      <div className="avatar-container">
        <Avatar />
        {props.isParent && <div className="reply-connector"></div>}
      </div>
      <div className="tweet-content">
        <div className="tweet">
          <div>
            <a href={Routes.profile_path(props.tweet.tweeter.handle)}>
              <span className={"username"}>{props.tweet.tweeter.username}</span>
              <span className={"font-secondary handle"}>
                {" @"}
                {props.tweet.tweeter.handle}
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
                props.tweet.tweeter.handle,
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
          isLiked={props.isLiked}
        />
      </div>
    </div>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object,
  updatedAt: PropTypes.string,
  replyingTo: PropTypes.string,
  isLiked: PropTypes.bool,
  isParent: PropTypes.bool,
};

export default Tweet;
