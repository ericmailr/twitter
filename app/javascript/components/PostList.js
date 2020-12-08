import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PostWrapper from "./PostWrapper";
import Retweet from "./tweets/Retweet";

function PostList(props) {
  return (
    <React.Fragment>
      {props.posts.map((post, index) => {
        return post.postType.toLowerCase() === "retweet" ? (
          <Retweet
            key={index}
            tweet={post.tweet}
            quoted_tweet={post.quoted_tweet}
            updatedAt={post.updatedAt}
            isOgLiked={post.isOgLiked}
            isOgRetweeted={post.isOgRetweeted}
          />
        ) : (
          <PostWrapper
            key={index}
            tweet={post.tweet}
            updatedAt={post.updatedAt}
            isLiked={post.isLiked}
            isRetweeted={post.isRetweetet}
            postType={post.postType}
          />
        );
      })}
    </React.Fragment>
  );
}

PostList.propTypes = {
  posts: PropTypes.array,
};

export default PostList;
