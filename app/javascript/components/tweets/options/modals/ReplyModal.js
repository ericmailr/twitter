import React from "react";
import PropTypes from "prop-types";

function ReplyModal(props) {
  /* href={Routes.new_tweet_path({ parent_id: props.tweetId }) */
  // fetch new_tweet_path and then run form_for here, post tweets path to create
  (() => {
    props.modal
      ? (document.body.style.backgroundColor = "rgba(110, 118, 125, 0.4)")
      : (document.body.style.backgroundColor = "rgb(21, 32, 43)");
  })();
  return (
    <div
      className={
        props.modal ? "reply-modal" : "reply-modal hidden-modal"
      }></div>
  );
}

ReplyModal.propTypes = {
  modal: PropTypes.bool,
  closeModal: PropTypes.func,
  tweetId: PropTypes.number,
};

export default ReplyModal;
