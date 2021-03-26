import React from "react";
import PropTypes from "prop-types";
import PostList from "./PostList";

function ProfilePostList({ posts, postTypes, user: { handle } }) {
  let postList = {};

  if (postTypes === "tweets") {
    postList = (
      <PostList
        posts={posts.filter((postHash) => {
          return ["tweet", "retweet", "quotetweet"].includes(postHash.postType);
        })}
      />
    );
  } else if (postTypes === "with_replies") {
    postList = (
      <PostList
        posts={posts.filter((postHash) => {
          return ["tweet", "retweet", "quotetweet", "reply"].includes(
            postHash.postType
          );
        })}
      />
    );
  } else if (postTypes === "media") {
    postList = (
      <div style={{ textAlign: "center", fontSize: "26px" }}>
        Under construction
      </div>
    );
  } else if (postTypes === "likes") {
    postList = (
      <PostList
        posts={posts.filter((postHash) => {
          return ["like"].includes(postHash.postType);
        })}
      />
    );
  } else {
    postList = null;
  }
  /* component-ize tab list? array of {tabName, pathname} */
  return (
    <div>
      <ul className="tab-list">
        <li className={postTypes === "tweets" ? "selected-tab" : ""}>
          <a href={Routes.profile_path(handle)}>Tweets</a>
        </li>
        <li className={postTypes === "with_replies" ? "selected-tab" : ""}>
          <a href={Routes.profile_with_replies_path(handle)}>
            Tweets & Replies
          </a>
        </li>
        <li className={postTypes === "media" ? "selected-tab" : ""}>
          <a href={Routes.profile_media_path(handle)}>Media</a>
        </li>
        <li className={postTypes === "likes" ? "selected-tab" : ""}>
          <a href={Routes.profile_likes_path(handle)}>Likes</a>
        </li>
      </ul>
      {postList}
    </div>
  );
}

ProfilePostList.propTypes = {
  posts: PropTypes.array,
  postTypes: PropTypes.string,
  user: PropTypes.object,
};

export default ProfilePostList;
