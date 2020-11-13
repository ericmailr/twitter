import React from "react";
import PropTypes from "prop-types";

function ReplyHeader(props) {
  return (
    <div>
      Replying to
      <a href={Routes.profile_path(props.parentHandle)}>
        {" @"}
        {props.parentHandle}
      </a>
    </div>
  );
}

ReplyHeader.propTypes = {
  parentHandle: PropTypes.string,
};

export default ReplyHeader;
