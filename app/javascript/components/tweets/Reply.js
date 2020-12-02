import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Tweet from "./Tweet";

function Reply(props) {
  return (
    <React.Fragment>
      <Tweet
        tweet={props.parent}
        updatedAt={props.parentUpdatedAt}
        isLiked={props.parentIsLiked}
        isParent={true}
      />
      <Tweet
        tweet={props.reply}
        updatedAt={props.replyUpdatedAt}
        isLiked={props.replyIsLiked}
        isParent={false}
      />
    </React.Fragment>
  );
}

Reply.propTypes = {
  parent: PropTypes.object,
  parentUpdatedAt: PropTypes.string,
  parentIsLiked: PropTypes.bool,
  reply: PropTypes.object,
  replyUpdatedAt: PropTypes.string,
  replyIsLiked: PropTypes.bool,
};

export default Reply;
