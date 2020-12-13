import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PostWrapper from "./PostWrapper";

function PostList(props) {
  return (
    <React.Fragment>
      {console.log(props.newposts)}
      {props.posts.map((postHash) => {
        return postHash.postType.toLowerCase() === "retweet" ? (
          <PostWrapper
            key={postHash.post.id}
            tweet={postHash.quoted_tweet}
            user={postHash.post.user}
            retweet={postHash.post}
            updatedAt={postHash.updatedAt}
            isLiked={postHash.isLiked}
            isRetweeted={postHash.isRetweeted}
            postType={"retweet"}
          />
        ) : postHash.postType.toLowerCase() === "quote_tweet" ? (
          <PostWrapper
            key={postHash.post.id}
            tweet={postHash.quoted_tweet}
            user={postHash.post.user}
            retweet={postHash.post}
            updatedAt={postHash.updatedAt}
            isLiked={postHash.isLiked}
            isRetweeted={postHash.isRetweeted}
            postType={"quote_tweet"}
          />
        ) : postHash.postType.toLowerCase() === "tweet" ? (
          <PostWrapper
            key={postHash.post.id}
            tweet={postHash.post}
            updatedAt={postHash.updatedAt}
            isLiked={postHash.isLiked}
            isRetweeted={postHash.isRetweetet}
            postType={postHash.postType}
          />
        ) : postHash.postType.toLowerCase() === "reply" ? (
          <React.Fragment key={postHash.parent.id}>
            <PostWrapper
              tweet={postHash.parent}
              updatedAt={postHash.parentUpdatedAt}
              isLiked={postHash.isParentLiked}
              isRetweeted={postHash.isParentRetweeted}
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
        ) : postHash.postType.toLowerCase() === "like" ? (
          <PostWrapper
            key={postHash.post.id}
            tweet={postHash.quoted_tweet}
            user={postHash.post.user}
            updatedAt={postHash.updatedAt}
            isLiked={postHash.isLiked}
            isRetweeted={postHash.isRetweetet}
            postType={postHash.postType}
          />
        ) : null;
      })}
    </React.Fragment>
  );
}

PostList.propTypes = {
  posts: PropTypes.array,
  newposts: PropTypes.array,
};

export default PostList;
