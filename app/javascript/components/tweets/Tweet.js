import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Avatar from "../Avatar";
import StatusReplyHeader from "../statuses/StatusReplyHeader";
import TweetOptions from "./TweetOptions";
import ActionHeader from "./ActionHeader";

function Tweet(props) {
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
    <div className="post-container">
      {props.actionHeader && (
        <ActionHeader
          username={props.tweeter.username}
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
              <a href={Routes.profile_path(props.tweet.tweeter.handle)}>
                <span className={"username"}>
                  {props.tweet.tweeter.username}
                </span>
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
            likesCount={likeState.likesCount}
            isLiked={likeState.isLiked}
            isRetweeted={props.isRetweeted}
            isStatusOption={false}
            toggleLike={toggleLike}
          />
        </div>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object,
  tweeter: PropTypes.object,
  updatedAt: PropTypes.string,
  replyingTo: PropTypes.string,
  isLiked: PropTypes.bool,
  isParent: PropTypes.bool,
  isRetweeted: PropTypes.bool,
  actionHeader: PropTypes.string,
};

export default Tweet;
