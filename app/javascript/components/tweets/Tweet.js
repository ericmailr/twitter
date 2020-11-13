import React from "react";
import PropTypes from "prop-types";
import Avatar from "../../assets/avatar.png";
import ReplyHeader from "./ReplyHeader";

function Tweet(props) {
  return (
    <div className="tweet">
      <img className="avatar" src={Avatar} alt="default avatar" />
      <div>
        <a href={Routes.profile_path(props.tweeter.handle)}>
          {props.tweeter.username}
          {" @"}
          {props.tweeter.handle}
          {" · "}
        </a>
        {props.updatedAt} <br />
        {props.parentHandle ? (
          <ReplyHeader parentHandle={props.parentHandle} />
        ) : null}
        <a href={Routes.status_path(props.tweeter.handle, props.tweet.id)}>
          {props.tweet.content}
        </a>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object,
  tweeter: PropTypes.object,
  updatedAt: PropTypes.string,
  parentHandle: PropTypes.string,
};

export default Tweet;
