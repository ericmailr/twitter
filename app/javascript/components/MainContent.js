import React from "react";
import PropTypes from "prop-types";
import Home from "./Home";
import Tweet from "./Tweet";
import Profile from "./Profile";

function MainContent(props) {
  const renderMainContent = () => {
    let mainContentType = null;
    switch (props.mainContentType) {
      case "Home":
        mainContentType = <Home posts={props.posts} />;
        break;
      case "Tweet":
        mainContentType = (
          <Tweet
            tweet={props.tweet}
            tweetIsLiked={props.tweetIsLiked}
            children={props.children}
          />
        );
        break;
      case "profile":
        return (
          <Profile
            posts={props.posts}
            user={props.user}
            userCreatedAt={props.user.created_at}
            postTypes={props.postTypes}
          />
        );
      default:
        mainContentType = <Home posts={props.posts} />;
    }
    return mainContentType;
  };

  return <div id="main-content">{renderMainContent()}</div>;
}

MainContent.propTypes = {
  mainContentType: PropTypes.string,
  posts: PropTypes.array,
  tweet: PropTypes.object,
  tweetIsLiked: PropTypes.bool,
  children: PropTypes.array,
  user: PropTypes.object,
  postTypes: PropTypes.string,
};

export default MainContent;
