import React from "react";
import PropTypes from "prop-types";
import Nav from "./Nav";
import Login from "./Login";
import DiscoverSection from "./DiscoverSection";
import Home from "./Home";
import Tweet from "./Tweet";
import Profile from "./Profile";

function App(props) {
  const {
    mainContentType,
    current_user,
    authenticity_token,
    content,
    flash,
    posts,
    tweet,
    tweetIsLiked,
    children,
    user,
    contentType,
    followable_users,
  } = props;
  const getMainComponent = () => {
    let mainComponent = null;
    switch (mainContentType) {
      case "Home":
        mainComponent = <Home posts={posts} />;
        break;
      case "Tweet":
        mainComponent = (
          <Tweet
            tweet={tweet}
            tweetIsLiked={tweetIsLiked}
            children={children}
          />
        );
        break;
      case "Profile":
        return (
          <Profile
            content={content}
            user={user}
            userCreatedAt={user.created_at}
            contentType={contentType}
          />
        );
      default:
        mainComponent = <Home posts={posts} />;
    }
    return mainComponent;
  };

  return (
    <div id="container">
      {!current_user ? (
        {
          /*<Login authenticity_token={authenticity_token} flash={flash} />*/
        }
      ) : (
        <React.Fragment>
          <Nav user={current_user} />
          <div id="main-container">
            <div id="main-content">{getMainComponent()}</div>
            <DiscoverSection followable_users={followable_users} />
          </div>
        </React.Fragment>
      )}
      <div id="modal-container"></div>
    </div>
  );
}

App.propTypes = {
  mainContentType: PropTypes.string,
  current_user: PropTypes.object,
  authenticity_token: PropTypes.string,
  flash: PropTypes.string,
  posts: PropTypes.array,
  content: PropTypes.object,
  contentType: PropTypes.string,
  tweet: PropTypes.object,
  tweetIsLiked: PropTypes.bool,
  children: PropTypes.array,
  user: PropTypes.object,
  followable_users: PropTypes.array,
};

export default App;
