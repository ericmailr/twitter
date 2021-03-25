import React from "react";
import PropTypes from "prop-types";
import Nav from "./Nav";
import Login from "./Login";
import DiscoverSection from "./DiscoverSection";
import Home from "./Home";
import Tweet from "./Tweet";
import Profile from "./Profile";

/* don't forget, you can destructure props like so const {current_user, authenticity_token, etc.} = props */
function App(props) {
  const getMainComponent = () => {
    let mainComponent = null;
    switch (props.mainContentType) {
      case "Home":
        mainComponent = <Home posts={props.posts} />;
        break;
      case "Tweet":
        mainComponent = (
          <Tweet
            tweet={props.tweet}
            tweetIsLiked={props.tweetIsLiked}
            children={props.children}
          />
        );
        break;
      case "Profile":
        return (
          <Profile
            posts={props.posts}
            user={props.user}
            userCreatedAt={props.user.created_at}
            postTypes={props.postTypes}
          />
        );
      default:
        mainComponent = <Home posts={props.posts} />;
    }
    return mainComponent;
  };

  return (
    <div id="container">
      {!props.current_user ? (
        <Login
          authenticity_token={props.authenticity_token}
          flash={props.flash}
        />
      ) : (
        <React.Fragment>
          <Nav user={props.current_user} />
          <div id="main-container">
            <div id="main-content">{getMainComponent()}</div>
            <DiscoverSection followable_users={props.followable_users} />
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
  tweet: PropTypes.object,
  tweetIsLiked: PropTypes.bool,
  children: PropTypes.array,
  user: PropTypes.object,
  postTypes: PropTypes.string,
  followable_users: PropTypes.array,
};

export default App;
