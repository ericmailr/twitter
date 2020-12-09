import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PostWrapper from "./PostWrapper";

function PostList(props) {
  return (
    <React.Fragment>
      {props.posts.map((post) => {
        return post.postType.toLowerCase() === "retweet" ? (
          <PostWrapper
            key={post.tweet.id}
            tweet={post.quoted_tweet}
            tweeter={post.tweet.tweeter}
            retweet={post.tweet}
            updatedAt={post.updatedAt}
            isLiked={post.isLiked}
            isRetweeted={post.isRetweeted}
            postType={"retweet"}
          />
        ) : post.postType.toLowerCase() === "quote_tweet" ? (
          <PostWrapper
            key={post.tweet.id}
            tweet={post.quoted_tweet}
            tweeter={post.tweet.tweeter}
            retweet={post.tweet}
            updatedAt={post.updatedAt}
            isLiked={post.isLiked}
            isRetweeted={post.isRetweeted}
            postType={"quote_tweet"}
          />
        ) : post.postType.toLowerCase() === "tweet" ? (
          <PostWrapper
            key={post.tweet.id}
            tweet={post.tweet}
            updatedAt={post.updatedAt}
            isLiked={post.isLiked}
            isRetweeted={post.isRetweetet}
            postType={post.postType}
          />
        ) : post.postType.toLowerCase() === "reply" ? (
          <React.Fragment key={post.reply.id}>
            <PostWrapper
              tweet={post.parent}
              updatedAt={post.parentUpdatedAt}
              isLiked={post.isParentLiked}
              isRetweeted={post.isParentRetweeted}
              postType={"reply-parent"}
            />
            <PostWrapper
              tweet={post.reply}
              updatedAt={post.replyUpdatedAt}
              isLiked={post.isReplyLiked}
              isRetweeted={post.isReplyRetweeted}
              postType={"reply"}
            />
          </React.Fragment>
        ) : null;
      })}
    </React.Fragment>
  );
}

PostList.propTypes = {
  posts: PropTypes.array,
};

export default PostList;
