import React from "react";
import PropTypes from "prop-types";
import TopHeader from "./TopHeader";
import PostWrapper from "./PostWrapper";

function Tweet({ tweet, tweetIsLiked, children }) {
  return (
    <React.Fragment>
      <TopHeader header="Tweet" goBack={true} />
      <PostWrapper
        tweet={tweet}
        updatedAt={tweet.updated_at_full}
        updatedAtBrief={tweet.updated_at_brief}
        isLiked={tweetIsLiked}
        postType="status"
      />
      {children.map((reply) => {
        return (
          <PostWrapper
            key={reply.id}
            tweet={reply}
            updatedAt={reply.updated_at_brief}
            replyingTo={tweet.user.handle}
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
