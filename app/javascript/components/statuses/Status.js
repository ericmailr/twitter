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
          <a href={Routes.profile_path(props.tweet.user.handle)}>
            <div className={"username"}>{props.tweet.user.username}</div>
            <div className={"font-secondary handle"}>
              {" @"}
              {props.tweet.user.handle}
            </div>
          </a>
        </div>
      </div>
      <a
        className="status-content"
        href={Routes.status_path(props.tweet.user.handle, props.tweet.id)}>
        {props.tweet.content}
      </a>

      <div className="status-updated-at font-secondary">{props.updatedAt}</div>

      {props.tweet.retweets.length + props.likesCount > 0 && (
        <div className="status-stats">
          <Stats type="Retweets" count={props.tweet.retweets.length} />
          <Stats type="Quote Tweets" count={props.tweet.quote_tweets.length} />
          <Stats type="Likes" count={props.likesCount} />
        </div>
      )}
      <TweetOptions
        tweet={props.tweet}
        updatedAt={props.updatedAtBrief}
        commentCount={props.tweet.children.length}
        retweetsCount={props.retweetsCount}
        isLiked={props.isLiked}
        isRetweeted={props.isRetweeted}
        isStatusOption={true}
        toggleLike={props.toggleLike}
        toggleRetweet={props.toggleRetweet}
      />
    </div>
  );
}

Status.propTypes = {
  tweet: PropTypes.object,
  updatedAt: PropTypes.string,
  updatedAtBrief: PropTypes.string,
  isLiked: PropTypes.bool,
  // should add typechecking for toggleLike and others i think ?
};

export default Status;
