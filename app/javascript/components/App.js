import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Nav from "./nav/Nav";
import Login from "./Login";
import DiscoverSection from "./discover/DiscoverSection";
import Home from "./Home";
import StatusPage from "./StatusPage";
import Profile from "./users/Profile";
import Modal from "./Modal";

const bodyColor = document.body.style.backgroundColor;
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
      document.body.style.backgroundColor = "rgba(110, 118, 125, 0.4)";
      document.getElementById("modal-container").style.display = "flex";
    } else {
      document.body.style.backgroundColor = bodyColor;
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
        exitModalElement.contains(e.target)
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

  const getMainComponent = () => {
    let mainComponent = null;
    switch (mainContentType) {
      case "Home":
        mainComponent = (
          <Home posts={content.posts} toggleModal={toggleModal} />
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
    <div id="container">
      {current_user ? (
        <React.Fragment>
          <Nav user={current_user} toggleModal={toggleModal} />
          <div id="main-container">
            <div id="main-content">{getMainComponent()}</div>
            <DiscoverSection followable_users={followable_users} />
          </div>
        </React.Fragment>
      ) : (
        <Login authenticity_token={authenticity_token} flash={flash} />
      )}
      <div id="modal-container">
        <Modal modalState={modalState} />
      </div>
    </div>
  );
}

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
};

export default App;
