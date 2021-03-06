import React from "react";
import PropTypes from "prop-types";
import PostWrapper from "./PostWrapper";
import SuggestedFollow from "./SuggestedFollow";
//rename MainList?

function PostList(props) {
  return (
    <React.Fragment>
      {props.posts.map((postHash) => {
        if (postHash.postType === "reply") {
          return (
            <React.Fragment key={postHash.parent.id}>
              <PostWrapper
                tweet={postHash.parent}
                updatedAt={postHash.parentUpdatedAt}
                user={postHash.post.user}
                isLiked={postHash.isParentLiked}
                isRetweeted={postHash.isParentRetweeted}
                actionHeader={"reply"}
                postType={"reply-parent"}
              />
              <PostWrapper
                tweet={postHash.post}
                updatedAt={postHash.updatedAt}
                isLiked={postHash.isLiked}
                isRetweeted={postHash.isRetweeted}
                postType={"reply"}
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
                postHash.postType != "tweet"
                  ? postHash.quoted_tweet
                  : postHash.post
              }
              user={postHash.post.user}
              updatedAt={postHash.updatedAt}
              isLiked={postHash.isLiked}
              isRetweeted={postHash.isRetweeted}
              actionHeader={
                !["tweet", "like"].includes(postHash.postType)
                  ? postHash.postType
                  : null
              }
              postType={postHash.postType}
            />
          );
        }
      })}
    </React.Fragment>
  );
}

PostList.propTypes = {
  posts: PropTypes.array,
};

export default PostList;
