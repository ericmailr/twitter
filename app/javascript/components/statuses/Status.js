import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Avatar from "../../assets/avatar.png";
import TweetOptions from "../tweets/TweetOptions";
import Stats from "./Stats";

function Status(props) {
  const [likeState, setLikeState] = useState([]);
  useEffect(async () => {
    let msg = await fetch(`/tweets/${props.tweet.id}`);
    let json = await msg.json();
    setLikeState({
      likesCount: json.likesCount,
      isLiked: props.isLiked,
    });
  }, []);

  const toggleLike = async () => {
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");
    let msg = "";
    if (!likeState.isLiked) {
      msg = await fetch("/likes", {
        method: "POST",
        body: JSON.stringify({
          tweet_id: props.tweet.id,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRF-Token": csrf,
        },
      });
    } else {
      msg = await fetch(`/likes/${props.tweet.id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRF-Token": csrf,
        },
      });
    }
    let json = await msg.json();
    setLikeState({
      likesCount: json.likesCount,
      isLiked: !likeState.isLiked,
    });
  };

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
          <Stats type="Likes" count={likeState.likesCount} />
        </div>
      )}
      <TweetOptions
        tweetId={props.tweet.id}
        commentCount={props.tweet.children.length}
        retweetCount={props.tweet.retweets.length}
        isLiked={likeState.isLiked}
        isStatusOption={true}
        toggleLike={toggleLike}
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
