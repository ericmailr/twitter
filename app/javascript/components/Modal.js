import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

function Modal() {
  const bodyColor = document.body.style.backgroundColor;
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (showModal) {
      document.addEventListener("keyup", exitModalHandler);
      document
        .getElementsByClassName("exit-svg-container")[0]
        .addEventListener("click", exitModalHandler);
      document
        .getElementById("nav-container")
        .addEventListener("click", exitModalHandler);
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

  const showLogoutModal = (e) => {
    let logoutModal = e.currentTarget.children[1];
    logoutModal.style.display = "flex";
    const hideLogoutModal = (e) => {
      logoutModal.style.display = "none";
      document.body.removeEventListener("click", hideLogoutModal, true);
    };
    document.body.addEventListener("click", hideLogoutModal, true);
  };

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
        toggleModal();
        document
          .getElementById("nav-container")
          .removeEventListener("click", exitModalHandler);
        document
          .getElementById("modal-container")
          .removeEventListener("click", exitModalHandler);
      }
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return <div></div>;
}

Modal.propTypes = {
  modalType: PropTypes.string,
};
export default Modal;
