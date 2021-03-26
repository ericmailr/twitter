import React from "react";
import PropTypes from "prop-types";
import ProfilePostList from "./ProfilePostList";
import FollowList from "./FollowList";
import TopHeader from "./TopHeader";
import ProfileCard from "./ProfileCard";

function Profile(props) {
  const { posts, user, follows, userCreatedAt, postTypes } = props;
  return (
    <React.Fragment>
      <TopHeader
        header={props.user.username}
        goBack={true}
        tweetCount={props.user.tweetCount}
      />
      {follows ? (
        <FollowList follows={follows} user={user} follow_type={postTypes} />
      ) : (
        <React.Fragment>
          <ProfileCard user={user} userCreatedAt={userCreatedAt} />
          <ProfilePostList
            posts={props.posts}
            postTypes={props.postTypes}
            user={props.user}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

Profile.propTypes = {
  posts: PropTypes.array,
  follows: PropTypes.object,
  user: PropTypes.object,
  userCreatedAt: PropTypes.string,
  postTypes: PropTypes.string,
};

export default Profile;
