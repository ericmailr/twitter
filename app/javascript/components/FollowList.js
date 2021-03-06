import React from "react";
import PropTypes from "prop-types";
import PostList from "./PostList";
import TopHeader from "./TopHeader";

function FollowList(props) {
  let followerList = {};
  if (props.follow_type === "followers") {
    followerList = props.followers;
  } else if (props.follow_type === "following") {
    followerList = props.followed_users;
  } else if (props.follow_type === "followers_you_know") {
    followerList = props.followers_user_follows;
  } else {
    return null;
  }

  return (
    <React.Fragment>
      <TopHeader
        header={props.user.username}
        goBack={true}
        tweetCount={props.user.tweetCount}
      />
      <div>
        <ul className="tab-list">
          <li
            className={
              props.follow_type === "followers_you_know" ? "selected-tab" : ""
            }>
            <a href={Routes.followers_you_know_path(props.user.handle)}>
              Followers you know
            </a>
          </li>
          <li
            className={props.follow_type === "followers" ? "selected-tab" : ""}>
            <a href={Routes.followers_path(props.user.handle)}>Followers</a>
          </li>
          <li
            className={props.follow_type === "following" ? "selected-tab" : ""}>
            <a href={Routes.following_path(props.user.handle)}>Following</a>
          </li>
        </ul>
        <div id="tweets">
          <PostList posts={followerList} />
        </div>
      </div>
    </React.Fragment>
  );
}

FollowList.propTypes = {
  followers: PropTypes.array,
  followed_users: PropTypes.array,
  followers_user_follows: PropTypes.array,
  user: PropTypes.object,
  follow_type: PropTypes.string,
};

export default FollowList;
