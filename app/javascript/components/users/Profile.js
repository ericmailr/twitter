import React from "react";
import PropTypes from "prop-types";
import ProfilePostContent from "./ProfilePostContent";
import ProfileFollowContent from "./ProfileFollowContent";
import TopHeader from "../TopHeader";
import ProfileCard from "./ProfileCard";

function Profile(props) {
  const {
    user,
    content,
    userCreatedAt,
    contentType,
    toggleModal,
    currentUser,
  } = props;
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
          contentProp={content}
          user={user}
          contentType={contentType}
          toggleModal={toggleModal}
        />
      ) : (
        <React.Fragment>
          <ProfileCard
            user={user}
            userCreatedAt={userCreatedAt}
            currentUser={currentUser}
          />
          <ProfilePostContent
            contentType={contentType}
            user={props.user}
            content={content}
            toggleModal={toggleModal}
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
  toggleModal: PropTypes.func,
};

export default Profile;
