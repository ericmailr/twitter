import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import PostWrapper from "./PostWrapper";

function Reply(props) {
  return (
    <React.Fragment>
      <PostWrapper
        tweet={props.parent}
        updatedAt={props.parentUpdatedAt}
        isLiked={props.parentIsLiked}
        isParent={true}
        postType={"tweet"}
      />
      <PostWrapper
        tweet={props.reply}
        updatedAt={props.replyUpdatedAt}
        isLiked={props.replyIsLiked}
        isParent={false}
        postType={"tweet"}
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
