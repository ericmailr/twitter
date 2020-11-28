import React from "react";
import PropTypes from "prop-types";
import Avatar from "../../assets/avatar.png";

function Status(props) {
  return (
    <div className="status">
      <div className="status-header">
        <div className="avatar-container">
          <img className="avatar" src={Avatar} alt="default avatar" />
        </div>
        <div>
          <a href={Routes.profile_path(props.tweeter.handle)}>
            <div className={"username"}>{props.tweeter.username}</div>
            <div className={"font-secondary handle"}>
              {" @"}
              {props.tweeter.handle}
            </div>
          </a>
        </div>
      </div>
      <a
        className="status-content"
        href={Routes.status_path(props.tweeter.handle, props.tweet.id)}>
        {props.tweet.content}
      </a>
      <div className="font-secondary">{props.updatedAt} </div>
      <div>{console.log(props.tweetjson)}</div>
    </div>
  );
}

Status.propTypes = {
  tweet: PropTypes.object,
  tweeter: PropTypes.object,
  updatedAt: PropTypes.string,
  tweetjson: PropTypes.object,
};

export default Status;
