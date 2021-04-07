import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Status from "./Status";
import Tweet from "./Tweet";

function PostWrapper(props) {
  const csrf = document
    .querySelector("meta[name='csrf-token']")
    .getAttribute("content");

  const [likeState, setLikeState] = useState([]);
  const [retweetState, setRetweetState] = useState([]);
  useEffect(async () => {
    let msg = await fetch(`/tweets/${props.tweet.id}`);
    let json = await msg.json();
    // https://stackoverflow.com/a/54923969 (setState inside useEffect for fetching data)
    setLikeState({
      likesCount: json.likesCount,
      isLiked: json.isLiked,
    });
    setRetweetState({
      retweetsCount: json.retweetsCount,
      isRetweeted: json.isRetweeted,
    });
  }, []);

  const toggleLike = async (e) => {
    e.stopPropagation();
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

  const toggleRetweet = async (e) => {
    e.stopPropagation();
    let msg = "";
    if (!retweetState.isRetweeted) {
      msg = await fetch("/retweets", {
        method: "POST",
        body: JSON.stringify({
          retweet: { quote_id: props.tweet.id },
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRF-Token": csrf,
        },
      });
    } else {
      msg = await fetch(`/retweets/${props.tweet.id}`, {
        method: "DELETE",
        body: JSON.stringify({
          retweet: { quote_id: props.tweet.id },
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRF-Token": csrf,
        },
      });
    }
    let json = await msg.json();
    setRetweetState({
      retweetsCount: json.retweetsCount,
      isRetweeted: !retweetState.isRetweeted,
    });
  };

  return (
    <React.Fragment>
      {props.postType === "status" ? (
        <Status
          {...props}
          toggleLike={toggleLike}
          toggleRetweet={toggleRetweet}
          likesCount={likeState.likesCount}
          isLiked={likeState.isLiked}
          retweetsCount={retweetState.retweetsCount}
          isRetweeted={retweetState.isRetweeted}
          isParent={props.postType === "reply-parent"}
          isReply={props.postType === "reply"}
          toggleModal={props.toggleModal}
        />
      ) : (
        <React.Fragment>
          <Tweet
            {...props}
            toggleLike={toggleLike}
            toggleRetweet={toggleRetweet}
            likesCount={likeState.likesCount}
            isLiked={likeState.isLiked}
            retweetsCount={retweetState.retweetsCount}
            isRetweeted={retweetState.isRetweeted}
            isParent={props.postType === "reply-parent"}
            isReply={props.postType === "reply"}
            isInModal={false}
            toggleModal={props.toggleModal}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

PostWrapper.propTypes = {
  tweet: PropTypes.object,
  user: PropTypes.object,
  updatedAt: PropTypes.string,
  actionHeader: PropTypes.string,
  postType: PropTypes.string,
  toggleModal: PropTypes.func,
};

export default PostWrapper;
