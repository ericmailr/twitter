import React from "react";
import PropTypes from "prop-types";
import ProfilePostContent from "./ProfilePostContent";
import ProfileFollowContent from "./ProfileFollowContent";
import TopHeader from "../TopHeader";
import ProfileCard from "./ProfileCard";

function Profile(props) {
  const { user, content, userCreatedAt, contentType } = props;
  return (
    <React.Fragment>
      <TopHeader
        header={props.user.username}
        goBack={true}
        tweetCount={props.user.tweetCount}
      />
      {["following", "followers", "followers_you_know"].includes(
        contentType
      ) ? (
        <ProfileFollowContent
          content={content}
          user={user}
          contentType={contentType}
        />
      ) : (
        <React.Fragment>
          <ProfileCard user={user} userCreatedAt={userCreatedAt} />
          <ProfilePostContent
            contentType={contentType}
            user={props.user}
            content={content}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

Profile.propTypes = {
  follows: PropTypes.object,
  content: PropTypes.object,
  user: PropTypes.object,
  userCreatedAt: PropTypes.string,
  contentType: PropTypes.string,
};

export default Profile;
