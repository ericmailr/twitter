import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Avatar from "../users/Avatar";

function SuggestedFollow(props) {
  const [followState, setFollowState] = useState({});

  useEffect(async () => {
    let msg = await fetch(`/${props.user.handle}/following`);
    let json = await msg.json();
    setFollowState({
      isFollowed: json.isFollowed,
      buttonClass: json.isFollowed ? "following-button" : "",
    });
  }, []);

  const toggleFollow = async (e, isButtonOnly) => {
    e.stopPropagation();
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");
    let msg = "";
    if (!followState.isFollowed) {
      msg = await fetch("/follows", {
        method: "POST",
        body: JSON.stringify({
          followed_user_id: props.user.id,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRF-Token": csrf,
        },
      });
    } else {
      msg = await fetch(`/follows/${props.user.id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRF-Token": csrf,
        },
      });
    }
    let json = await msg.json();
    let followingClasses = isButtonOnly
      ? "following-button follow-button-only"
      : "following-button";
    setFollowState({
      isFollowed: json.isFollowed,
      buttonClass: json.isFollowed ? followingClasses : "",
    });
  };

  const followButtonEnterStyle = (e) => {
    e.currentTarget.classList.add("follow-button-hover");
  };

  const followButtonLeaveStyle = (e) => {
    e.currentTarget.classList.remove("follow-button-hover");
  };

  const truncate = (string) => {
    let maxLength = 15;
    let truncated = string.slice(0, maxLength - 1);
    return string.length > maxLength ? truncated + "..." : truncated;
  };

  return (
    <>
      {props.buttonOnly ? (
        <div
          className={
            "follow-button follow-button-only " + followState.buttonClass
          }
          onClick={(e) => {
            toggleFollow(e, true);
          }}
          onMouseEnter={followButtonEnterStyle}
          onMouseLeave={followButtonLeaveStyle}
          style={
            followState.isFollowed
              ? { maxWidth: "101px" }
              : { maxWidth: "79px" }
          }>
          {followState.isFollowed ? "Following" : "Follow"}
        </div>
      ) : (
        <div
          className="suggested-follow tweet-container"
          onClick={() => {
            window.location.href = Routes.profile_path(props.user.handle);
          }}
          style={props.last ? { borderBottom: "none" } : {}}>
          <div className="avatar-container suggested-follow-avatar">
            <Avatar avatar_public_id={props.user.avatar_public_id} />
          </div>
          <div className="suggested-follow-content">
            <div className="suggested-follow-handle">
              <a href={Routes.profile_path(props.user.handle)}>
                <span className={"username"}>
                  {truncate(props.user.username)}
                </span>
                <span className={"font-secondary handle"}>
                  {" @"}
                  {truncate(props.user.handle)}
                </span>
              </a>
            </div>
            <div
              className={"follow-button " + followState.buttonClass}
              onClick={toggleFollow}
              onMouseEnter={followButtonEnterStyle}
              onMouseLeave={followButtonLeaveStyle}
              style={
                followState.isFollowed
                  ? { maxWidth: "101px" }
                  : { maxWidth: "79px" }
              }>
              {followState.isFollowed ? "Following" : "Follow"}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

SuggestedFollow.propTypes = {
  user: PropTypes.object,
  last: PropTypes.bool,
  buttonOnly: PropTypes.bool,
};

export default SuggestedFollow;
