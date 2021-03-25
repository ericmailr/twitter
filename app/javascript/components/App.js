import React from "react";
import PropTypes from "prop-types";
import Nav from "./Nav";
import Login from "./Login";
import MainContent from "./MainContent";
import DiscoverSection from "./DiscoverSection";

/* don't forget, you can destructure props like so const {current_user, authenticity_token, etc.} = props */
function App(props) {
  const generateMainContentProps = () => {
    let mainContentProps = null;
    switch (props.mainContentType) {
      case "Home":
        mainContentProps = {
          mainContentType: props.mainContentType,
          posts: props.posts,
        };
        break;
      case "Tweet":
        mainContentProps = {
          mainContentType: props.mainContentType,
          tweet: props.tweet,
          tweetIsLiked: props.tweetIsLiked,
          children: props.children,
        };
        break;
      case "profile":
        mainContentProps = {
          mainContentType: props.mainContentType,
          user: props.user,
          postTypes: props.postTypes,
        };
        break;
      default:
        mainContentProps = {
          mainContentType: props.mainContentType,
          posts: props.posts,
        };
    }
    return mainContentProps;
  };
  return (
    <div id="container">
      <Nav user={props.current_user} />
      {!props.current_user ? (
        <Login
          authenticity_token={props.authenticity_token}
          flash={props.flash}
        />
      ) : (
        <div id="main-container">
          {/* just pass render the right component here inside #main-content div */}
          <MainContent {...generateMainContentProps()} />
          <DiscoverSection followable_users={props.followable_users} />
        </div>
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
