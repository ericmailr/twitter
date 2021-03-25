import React from "react";
import PropTypes from "prop-types";
import TopHeader from "./TopHeader";
import PostWrapper from "./PostWrapper";

function Tweet(props) {
  return (
    <React.Fragment>
      <TopHeader header="Tweet" />
      <PostWrapper
        tweet={props.tweet}
        updatedAt={props.tweet.updated_at_full}
        updatedAtBrief={props.tweet.updated_at_brief}
        isLiked={props.tweetIsLiked}
        postType="status"
      />
      {props.children.map((reply) => {
        return (
          <PostWrapper
            key={reply.id}
            tweet={reply}
            updatedAt={reply.updated_at_brief}
            replyingTo={props.tweet.user.handle}
            postType="tweet"
          />
        );
      })}
    </React.Fragment>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object,
  children: PropTypes.array,
  tweetIsLiked: PropTypes.bool,
};

export default Tweet;
