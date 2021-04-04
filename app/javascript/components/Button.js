import React from "react";
import PropTypes from "prop-types";

function Button({ buttonText }) {
  return (
    <div className="button-container">
      <div className="submit-button-spacer"></div>
      <div className="submit-button">{buttonText}</div>
    </div>
  );
}

Button.propTypes = { buttonText: PropTypes.string };

export default Button;
