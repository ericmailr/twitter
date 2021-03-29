import React from "react";
import PropTypes from "prop-types";
import PostList from "../PostList";
import TabList from "./TabList";

function ProfileFollowContent({ contentType, content, user: { handle } }) {
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
        <PostList posts={content[contentType]} />
      </div>
    </div>
  );
}

ProfileFollowContent.propTypes = {
  user: PropTypes.object,
  content: PropTypes.object,
  contentType: PropTypes.string,
};

export default ProfileFollowContent;
