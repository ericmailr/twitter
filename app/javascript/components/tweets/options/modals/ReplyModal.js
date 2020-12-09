import React from "react";
import PropTypes from "prop-types";

function ReplyModal(props) {
  /* href={Routes.new_tweet_path({ parent_id: props.tweetId }) */
  // fetch new_tweet_path and then run form_for here, post tweets path to create

  return <React.Fragment>reply to tweet form</React.Fragment>;
}

ReplyModal.propTypes = {
  showModal: PropTypes.bool,
  toggleModal: PropTypes.func,
  tweetId: PropTypes.number,
};

export default ReplyModal;
