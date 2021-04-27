import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Nav from "./nav/Nav";
import Login from "./Login";
import DiscoverSection from "./discover/DiscoverSection";
import Home from "./Home";
import StatusPage from "./StatusPage";
import Profile from "./users/Profile";
import Modal from "./Modal";
import Signup from "./Signup";
import PostList from "./PostList";

function App(props) {
  const {
    mainContentType,
    current_user,
    authenticity_token,
    content,
    flash,
    tweet,
    tweetIsLiked,
    children,
    user,
    contentType,
    followable_users,
    errors,
    users,
  } = props;
  const [modalState, setModal] = useState({
    modalType: "none",
    modalProps: {},
  });

  useEffect(() => {
    if (modalState.modalType !== "none") {
      document.body.addEventListener("keyup", exitModalHandler);
      document
        .getElementById("modal-container")
        .addEventListener("click", exitModalHandler);
      document.getElementById("modal-container").style.display = "flex";
    } else {
      document.getElementById("modal-container").style.display = "none";
    }
  });

  const exitModalHandler = (e) => {
    if ((e.type === "keyup" && e.key === "Escape") || e.type === "click") {
      let modalElement = document.getElementById("modal");
      let exitModalElement = document.getElementsByClassName(
        "exit-svg-container"
      )[0];
      if (
        e.type === "keyup" ||
        !modalElement.contains(e.target) ||
        (exitModalElement !== null && exitModalElement.contains(e.target))
      ) {
        setModal({
          modalType: "none",
          modalProps: {},
        });
        document
          .getElementById("nav-container")
          .removeEventListener("click", exitModalHandler);
        document
          .getElementById("modal-container")
          .removeEventListener("click", exitModalHandler);
      }
    }
  };

  const toggleModal = (modalType, modalProps) => {
    setModal({ modalType: modalType, modalProps: modalProps });
  };

  const colorInputs = (e) => {
    e.currentTarget.parentElement.classList.add("focused");
    e.currentTarget.parentElement.style.border =
      "2px solid RGB(var(--reply-color))";
  };

  const decolorInputs = (e) => {
    e.currentTarget.parentElement.classList.remove("focused");
    e.currentTarget.parentElement.style.border =
      "2px solid rgba(136, 153, 166, 0.25)";
  };

  const getMainComponent = () => {
    let mainComponent = null;
    switch (mainContentType) {
      case "Home":
        mainComponent = (
          <Home postsProp={content.posts} toggleModal={toggleModal} />
        );
        break;
      case "Tweet":
        mainComponent = (
          <StatusPage
            tweet={tweet}
            tweetIsLiked={tweetIsLiked}
            children={children}
            toggleModal={toggleModal}
          />
        );
        break;
      case "Users":
        return <PostList posts={users} toggleModal={toggleModal} />;
      case "Profile":
        return (
          <Profile
            content={content}
            user={user}
            userCreatedAt={user.created_at}
            contentType={contentType}
            toggleModal={toggleModal}
          />
        );
      default:
        mainComponent = <Home posts={content.posts} />;
    }
    return mainComponent;
  };

  return (
    // what's the point of container for Login, Signup.
    // why render App at all for Login and Signup
    <div id="container">
      {current_user ? (
        <React.Fragment>
          <Nav user={current_user} toggleModal={toggleModal} />
          <div id="main-container">
            <div id="main-content">{getMainComponent()}</div>
            <DiscoverSection followable_users={followable_users} />
          </div>
        </React.Fragment>
      ) : mainContentType === "Signup" ? (
        <Signup
          authenticity_token={authenticity_token}
          flash={flash}
          colorInputs={colorInputs}
          decolorInputs={decolorInputs}
          errors={errors}
        />
      ) : (
        <Login authenticity_token={authenticity_token} flash={flash} />
      )}
      <div id="modal-container" className="form-container">
        <Modal modalState={modalState} />
      </div>
    </div>
  );
}
// if I'm going to use rails as just an api, I don't need to pass all the content down as props
App.propTypes = {
  mainContentType: PropTypes.string,
  current_user: PropTypes.object,
  authenticity_token: PropTypes.string,
  flash: PropTypes.object,
  content: PropTypes.object,
  contentType: PropTypes.string,
  tweet: PropTypes.object,
  tweetIsLiked: PropTypes.bool,
  children: PropTypes.array,
  user: PropTypes.object,
  followable_users: PropTypes.array,
  errors: PropTypes.object,
  users: PropTypes.array,
};

export default App;
