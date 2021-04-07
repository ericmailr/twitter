import React from "react";
import PropTypes from "prop-types";

function StatusReplyHeader(props) {
  return (
    <div className={"font-secondary"}>
      Replying to
      <a href={Routes.profile_path(props.parentHandle)}>
        {" @"}
        {props.parentHandle}
      </a>
    </div>
  );
}

StatusReplyHeader.propTypes = {
  parentHandle: PropTypes.string,
};

export default StatusReplyHeader;
