import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Avatar from "../../assets/avatar.png";
import TweetOptions from "../tweets/TweetOptions";
import Stats from "./Stats";

function Status(props) {
  return (
    <div className="status">
      <div className="status-header">
        <div className="avatar-container">
          <img className="avatar" src={Avatar} alt="default avatar" />
        </div>
        <div className="status-tweeter">
          <a href={Routes.profile_path(props.tweet.tweeter.handle)}>
            <div className={"username"}>{props.tweet.tweeter.username}</div>
            <div className={"font-secondary handle"}>
              {" @"}
              {props.tweet.tweeter.handle}
            </div>
          </a>
        </div>
      </div>
      <a
        className="status-content"
        href={Routes.status_path(props.tweet.tweeter.handle, props.tweet.id)}>
        {props.tweet.content}
      </a>

      <div className="status-updated-at font-secondary">{props.updatedAt} </div>

      {props.tweet.retweets.length + props.tweet.likes.length > 0 && (
        <div className="status-stats">
          <Stats type="Retweets" count={props.tweet.retweets.length} />
          <Stats type="Quote Tweets" count={props.tweet.quote_tweets.length} />
          <Stats type="Likes" count={props.likesCount} />
        </div>
      )}
      <TweetOptions
        tweetId={props.tweet.id}
        commentCount={props.tweet.children.length}
        retweetCount={props.tweet.retweets.length}
        isLiked={props.isLiked}
        isStatusOption={true}
        toggleLike={props.toggleLike}
      />
    </div>
  );
}

Status.propTypes = {
  tweet: PropTypes.object,
  updatedAt: PropTypes.string,
  isLiked: PropTypes.bool,
};

export default Status;
