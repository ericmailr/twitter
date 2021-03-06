import React from "react";
import PropTypes from "prop-types";
import PostList from "./PostList";

function ProfilePostList(props) {
  let postList = {};

  if (props.post_types === "tweets") {
    postList = (
      <PostList
        posts={props.posts.filter((postHash) => {
          return ["tweet", "retweet", "quotetweet"].includes(postHash.postType);
        })}
      />
    );
  } else if (props.post_types === "with_replies") {
    postList = (
      <PostList
        posts={props.posts.filter((postHash) => {
          return ["tweet", "retweet", "quotetweet", "reply"].includes(
            postHash.postType
          );
        })}
      />
    );
  } else if (props.post_types === "media") {
    postList = (
      <div style={{ textAlign: "center", fontSize: "26px" }}>
        Under construction
      </div>
    );
  } else if (props.post_types === "likes") {
    postList = (
      <PostList
        posts={props.posts.filter((postHash) => {
          return ["like"].includes(postHash.postType);
        })}
      />
    );
  } else {
    postList = null;
  }

  return (
    <div>
      <ul className="tab-list">
        <li className={props.post_types === "tweets" ? "selected-tab" : ""}>
          <a href={Routes.profile_path(props.user.handle)}>Tweets</a>
        </li>
        <li
          className={props.post_types === "with_replies" ? "selected-tab" : ""}>
          <a href={Routes.profile_with_replies_path(props.user.handle)}>
            Tweets & Replies
          </a>
        </li>
        <li className={props.post_types === "media" ? "selected-tab" : ""}>
          <a href={Routes.profile_media_path(props.user.handle)}>Media</a>
        </li>
        <li className={props.post_types === "likes" ? "selected-tab" : ""}>
          <a href={Routes.profile_likes_path(props.user.handle)}>Likes</a>
        </li>
      </ul>
      {postList}
    </div>
  );
}

ProfilePostList.propTypes = {
  posts: PropTypes.array,
  post_types: PropTypes.string,
  user: PropTypes.object,
};

export default ProfilePostList;
