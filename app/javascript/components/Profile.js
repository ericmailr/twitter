import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PostList from "./PostList";

function Profile(props) {
  const [postTypes, setPostTypes] = useState([
    "tweet",
    "retweet",
    "quotetweet",
  ]);

  let postList = (
    <PostList
      posts={props.posts.filter((postHash) => {
        return postTypes.includes(postHash.postType);
      })}
    />
  );
  useEffect(() => {
    postList = (
      <PostList
        posts={props.posts.filter((postHash) => {
          return postTypes.includes(postHash.postType);
        })}
      />
    );
  }, []);

  return (
    <div>
      <ul className="tab-list">
        <li onClick={() => setPostTypes(["tweet", "retweet", "quotetweet"])}>
          Tweets
        </li>
        <li
          onClick={() =>
            setPostTypes(["tweet", "retweet", "quotetweet", "reply"])
          }>
          Tweets & Replies
        </li>
        <li onClick={() => setPostTypes(["quotetweet"])}>Media</li>
        <li onClick={() => setPostTypes([""])}>Likes</li>
      </ul>
      {postList}
    </div>
  );
}

Profile.propTypes = {
  posts: PropTypes.array,
};

export default Profile;
