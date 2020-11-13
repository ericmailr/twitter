import React from "react";
import PropTypes from "prop-types";
import Avatar from "../assets/avatar.png";
import TweetOptions from "./tweets/TweetOptions";

function Status(props) {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <img className="avatar" src={Avatar} alt="default avatar" />
        <div>
          <a href={Routes.profile_path(props.tweeter.handle)}>
            {props.tweeter.username}
            <br />
            {"@"}
            {props.tweeter.handle}
          </a>
        </div>
      </div>
      <a href={Routes.status_path(props.tweeter.handle, props.tweet.id)}>
        {props.tweet.content}
      </a>
      <br />
      {props.updatedAt} <br />
    </div>
  );
}

Status.propTypes = {
  tweet: PropTypes.object,
  tweeter: PropTypes.object,
  updatedAt: PropTypes.string,
};

export default Status;
