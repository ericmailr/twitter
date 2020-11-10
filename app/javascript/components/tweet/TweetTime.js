import React from "react";
import PropTypes from "prop-types";

function TweetTime(props) {
  return (
    <div>
      {props.updatedAt} <br />
    </div>
  );
}

TweetTime.propTypes = {
  updatedAt: PropTypes.string,
};

export default TweetTime;
