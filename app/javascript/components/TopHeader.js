import React from "react";
import PropTypes from "prop-types";

function TopHeader(props) {
  return (
    <div id="top-header">
      <h1>{props.header}</h1>
    </div>
  );
}

TopHeader.propTypes = {
  header: PropTypes.string,
};

export default TopHeader;
