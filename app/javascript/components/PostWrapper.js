import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Status from "./statuses/Status";
import Tweet from "./tweets/Tweet";

function PostWrapper(props) {
  const [likeState, setLikeState] = useState([]);
  useEffect(async () => {
    let msg = await fetch(`/tweets/${props.tweet.id}`);
    let json = await msg.json();
    // https://stackoverflow.com/a/54923969 (setState inside useEffect for fetching data)
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
          quote_id: props.tweet.id,
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
    <React.Fragment>
      {props.postType.toLowerCase() === "tweet" && (
        <Tweet
          {...props}
          toggleLike={toggleLike}
          likesCount={likeState.likesCount}
          isLiked={likeState.isLiked}
        />
      )}
      {props.postType.toLowerCase() === "status" && (
        <Status
          tweet={props.tweet}
          updatedAt={props.updatedAt}
          isLiked={props.isLiked}
          toggleLike={toggleLike}
          likesCount={likeState.likesCount}
          isLiked={likeState.isLiked}
        />
      )}
      {props.postType.toLowerCase() === "retweet" && (
        <Tweet
          tweet={props.tweet}
          tweeter={props.tweeter}
          updatedAt={props.updatedAt}
          actionHeader={"retweet"}
          toggleLike={toggleLike}
          likesCount={likeState.likesCount}
          isLiked={likeState.isLiked}
        />
      )}
      {props.postType.toLowerCase() === "quote_tweet" && (
        <React.Fragment>
          Quote Tweet
          <Tweet
            tweet={props.tweet}
            tweeter={props.tweeter}
            updatedAt={props.updatedAt}
            actionHeader={"retweet"}
            toggleLike={toggleLike}
            likesCount={likeState.likesCount}
            isLiked={likeState.isLiked}
          />
        </React.Fragment>
      )}

      {props.postType.toLowerCase() === "reply-parent" && (
        <Tweet
          tweet={props.tweet}
          updatedAt={props.updatedAt}
          isLiked={props.isLiked}
          isRetweeted={props.isRetweeted}
          isParent={true}
          toggleLike={toggleLike}
          likesCount={likeState.likesCount}
          isLiked={likeState.isLiked}
        />
      )}
      {props.postType.toLowerCase() === "reply" && (
        <Tweet
          tweet={props.tweet}
          updatedAt={props.updatedAt}
          isLiked={props.isLiked}
          isRetweeted={props.isRetweeted}
          isReply={true}
          toggleLike={toggleLike}
          likesCount={likeState.likesCount}
          isLiked={likeState.isLiked}
        />
      )}
      {props.postType.toLowerCase() === "like" && (
        <Tweet
          tweet={props.tweet}
          tweeter={props.tweeter}
          updatedAt={props.updatedAt}
          actionHeader={"like"}
          toggleLike={toggleLike}
          likesCount={likeState.likesCount}
          isLiked={likeState.isLiked}
        />
      )}
    </React.Fragment>
  );
}

PostWrapper.propTypes = {
  tweet: PropTypes.object,
  tweeter: PropTypes.object,
  retweet: PropTypes.object,
  updatedAt: PropTypes.string,
  replyingTo: PropTypes.string,
  isLiked: PropTypes.bool,
  isParent: PropTypes.bool,
  isRetweeted: PropTypes.bool,
  actionHeader: PropTypes.string,
  postType: PropTypes.string,
};

export default PostWrapper;
