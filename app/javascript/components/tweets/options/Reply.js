import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReplyModal from "./modals/ReplyModal";
import ReactDOM from "react-dom";

function Reply(props) {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (showModal) {
      document.body.addEventListener("click", clickHandler);
      document.body.style.backgroundColor = "rgba(110, 118, 125, 0.4)";
      document.getElementById("modal").style.display = "block";
    } else {
      document.body.style.backgroundColor = "rgb(21, 32, 43)";
      document.getElementById("modal").style.display = "none";
    }
  });
  //need a better understanding of useEffect, particularly second argument

  const clickHandler = (e) => {
    if (e.target.id != "modal") {
      toggleModal();
      document.body.removeEventListener("click", clickHandler);
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <React.Fragment>
      {showModal &&
        ReactDOM.createPortal(
          <ReplyModal
            showModal={showModal}
            toggleModal={toggleModal}
            tweetId={props.tweetId}
          />,
          document.getElementById("modal")
        )}
      <div className="option-container" onClick={toggleModal}>
        <svg className="tweet-options-svg" viewBox="0 0 24 24">
          <g>
            <path
              fill="#8899a6"
              d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
          </g>
        </svg>
        {!props.isStatusOption && props.commentCount != 0 && (
          <span className="option-count">{props.commentCount}</span>
        )}
      </div>
    </React.Fragment>
  );
}

Reply.propTypes = {
  tweetId: PropTypes.number,
  commentCount: PropTypes.number,
  isStatusOption: PropTypes.bool,
};

export default Reply;
