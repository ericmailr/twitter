import React from "react";
import PropTypes from "prop-types";

function Button({ buttonText, clickAction }) {
  return (
    <div className="button-container">
      <div className="submit-button-spacer"></div>
      <div
        className="submit-button"
        onClick={() => {
          clickAction(2);
        }}>
        {buttonText}
      </div>
    </div>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string,
  clickAction: PropTypes.func,
};

export default Button;
