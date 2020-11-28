import React from "react";
import PropTypes from "prop-types";
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
      {/* NEEDS AVATAR AND STUFF, CAN I ACTUALLY JUST USE FEEDTWEET (CALLED FROM STATUS, FOR EACH CHILD REPLY) */}
      <div>
        <a href={Routes.profile_path(props.tweeter.handle)}>
          <span className={"username"}>{props.tweeter.username}</span>
          <span className={"font-secondary handle"}>
            {" @"}
            {props.tweeter.handle}
          </span>
        </a>
        <span className={"font-secondary"}>
          {" · "}
          {props.updatedAt}
        </span>
        <br />
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
