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
        modal = <ComposeModal avatar_public_id={modalProps.avatar_public_id} />;
        break;
      case "compose-reply":
        modal = (
          <ComposeModal
            tweet={modalProps.tweet}
            avatar_public_id={modalProps.avatar_public_id}
          />
        );
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
