import React from "react";
import PropTypes from "prop-types";
import PostWrapper from "./posts/PostWrapper";
import SuggestedFollow from "./discover/SuggestedFollow";

function PostList({ posts, contentType, toggleModal }) {
  return (
    <React.Fragment>
      {posts.map((postHash) => {
        if (postHash.postType === "reply") {
          return (
            <React.Fragment key={postHash.post.id}>
              <PostWrapper
                tweet={postHash.parent}
                updatedAt={postHash.parent.updated_at_brief}
                user={postHash.post.user}
                actionHeader={contentType === "with_replies" ? "" : "reply"}
                postType={"reply-parent"}
                toggleModal={toggleModal}
              />
              <PostWrapper
                tweet={postHash.post}
                updatedAt={postHash.post.updated_at_brief}
                postType={"reply"}
                toggleModal={toggleModal}
              />
            </React.Fragment>
          );
        } else if (postHash.postType === "user") {
          return (
            <SuggestedFollow key={postHash.user.id} user={postHash.user} />
          );
        } else {
          return (
            <PostWrapper
              key={postHash.post.id}
              tweet={
                postHash.quoted_tweet ? postHash.quoted_tweet : postHash.post
              }
              user={postHash.post.user}
              updatedAt={
                postHash.quoted_tweet
                  ? postHash.quoted_tweet.updated_at_brief
                  : postHash.post.updated_at_brief
              }
              actionHeader={
                !["tweet"].includes(postHash.postType)
                  ? postHash.postType
                  : null
              }
              postType={postHash.postType}
              toggleModal={toggleModal}
            />
          );
        }
      })}
    </React.Fragment>
  );
}

PostList.propTypes = {
  posts: PropTypes.array,
  contentType: PropTypes.string,
  toggleModal: PropTypes.func,
};

export default PostList;
