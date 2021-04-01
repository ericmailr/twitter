import React from "react";
import PropTypes from "prop-types";
import ComposeModal from "./posts/ComposeModal";

function Modal({ modalState: { modalType, modalProps } }) {
  const getModal = () => {
    let modal;
    switch (modalType) {
      case "none":
        modal = null;
        break;
      case "compose-new":
        modal = <ComposeModal id="modal" />;
        break;
      case "compose-reply":
        modal = <ComposeModal id="modal" tweet={modalProps.tweet} />;
        break;
      case "signup":
        modal = <SignupModal id="modal" />;
        break;
      default:
        modal = null;
    }
    return modal;
  };

  return <React.Fragment>{getModal()}</React.Fragment>;
}

Modal.propTypes = {
  modalState: PropTypes.object,
};
export default Modal;
