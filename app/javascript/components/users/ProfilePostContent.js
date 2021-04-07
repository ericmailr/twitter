import React from "react";
import PropTypes from "prop-types";
import PostList from "../PostList";
import TabList from "./TabList";

function ProfilePostContent({
  contentType,
  content,
  user: { handle },
  toggleModal,
}) {
  const tabArray = [
    {
      contentType: "tweets",
      path: Routes.profile_path(handle),
      name: "Tweets",
    },
    {
      contentType: "with_replies",
      path: Routes.profile_with_replies_path(handle),
      name: "Tweets & Replies",
    },
    {
      contentType: "media",
      path: Routes.profile_media_path(handle),
      name: "Media",
    },
    {
      contentType: "likes",
      path: Routes.profile_likes_path(handle),
      name: "Likes",
    },
  ];
  return (
    <div>
      <TabList tabArray={tabArray} contentType={contentType} />
      {contentType === "media" ? (
        <h1 style={{ textAlign: "center" }}>Under Construction</h1>
      ) : (
        <PostList
          posts={content[contentType]}
          contentType={contentType}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
}

ProfilePostContent.propTypes = {
  content: PropTypes.object,
  contentType: PropTypes.string,
  user: PropTypes.object,
  toggleModal: PropTypes.func,
};

export default ProfilePostContent;
