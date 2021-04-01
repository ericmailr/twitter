import React from "react";
import PropTypes from "prop-types";
import PostList from "../PostList";
import TabList from "./TabList";

function ProfileFollowContent({
  contentType,
  content,
  user: { handle },
  toggleModal,
}) {
  const tabArray = [
    {
      contentType: "followers_you_know",
      path: Routes.followers_you_know_path(handle),
      name: "Followers you know",
    },
    {
      contentType: "followers",
      path: Routes.followers_path(handle),
      name: "Followers",
    },
    {
      contentType: "following",
      path: Routes.following_path(handle),
      name: "Following",
    },
  ];
  return (
    <div>
      <div>
        <TabList tabArray={tabArray} contentType={contentType} />
        <PostList posts={content[contentType]} toggleModal={toggleModal} />
      </div>
    </div>
  );
}

ProfileFollowContent.propTypes = {
  user: PropTypes.object,
  content: PropTypes.object,
  contentType: PropTypes.string,
  toggleModal: PropTypes.func,
};

export default ProfileFollowContent;
