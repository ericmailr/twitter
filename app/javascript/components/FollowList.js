import React from "react";
import PropTypes from "prop-types";
import PostList from "./PostList";

function FollowList({ follow_type, follows, user: { handle } }) {
  let followerList = follows[follow_type];
  return (
    <React.Fragment>
      <div>
        <ul className="tab-list">
          <li
            className={
              follow_type === "followers_you_know" ? "selected-tab" : ""
            }>
            <a href={Routes.followers_you_know_path(handle)}>
              Followers you know
            </a>
          </li>
          <li className={follow_type === "followers" ? "selected-tab" : ""}>
            <a href={Routes.followers_path(handle)}>Followers</a>
          </li>
          <li className={follow_type === "following" ? "selected-tab" : ""}>
            <a href={Routes.following_path(handle)}>Following</a>
          </li>
        </ul>
        <div>
          <PostList posts={followerList} />
        </div>
      </div>
    </React.Fragment>
  );
}

FollowList.propTypes = {
  user: PropTypes.object,
  follows: PropTypes.object,
  follow_type: PropTypes.string,
};

export default FollowList;
