import React from "react";
import PropTypes from "prop-types";

function Button({ buttonText, clickAction, buttonClasses, formId }) {
  return (
    <div className="button-container">
      <div className="submit-button-spacer"></div>
      {buttonText === "Next" ? (
        <div className={buttonClasses} onClick={clickAction}>
          {buttonText}
        </div>
      ) : (
        <>
          <button
            type="submit"
            form={formId || "signup-form"}
            className={buttonClasses} /*onClick={clickAction}*/
            disabled={
              buttonClasses.includes("unsubmittable-button") ? true : false
            }>
            {buttonText}
          </button>
        </>
      )}
    </div>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string,
  clickAction: PropTypes.func,
};

export default Button;
