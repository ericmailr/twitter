import React from "react";
import PropTypes from "prop-types";
import Avatar from "../../assets/avatar.png";
import ReplyHeader from "./ReplyHeader";

function Tweet(props) {
  const content = () => {
    if (props.tweet.comment) {
      return props.tweet.comment;
    } else {
      return props.tweet.content;
    }
  };
  return (
    <div className="tweet">
      <img className="avatar" src={Avatar} alt="default avatar" />
      <div>
        <a href={Routes.profile_path(props.tweeter.handle)}>
          {props.tweeter.username}
          {" @"}
          {props.tweeter.handle}
        </a>
        {" · "}
        {props.updatedAt} <br />
        {props.replyingTo && <ReplyHeader parentHandle={props.replyingTo} />}
        <a href={Routes.status_path(props.tweeter.handle, props.tweet.id)}>
          {content()}
        </a>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object,
  tweeter: PropTypes.object,
  updatedAt: PropTypes.string,
  replyingTo: PropTypes.string,
  parent: PropTypes.object,
};

export default Tweet;
