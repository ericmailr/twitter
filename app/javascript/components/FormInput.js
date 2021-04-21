import React, { useState } from "react";
import { YearPicker, MonthPicker, DayPicker } from "react-dropdown-date";
import PropTypes from "prop-types";

function FormInput({
  id,
  inputName,
  setSignupFieldValue,
  signupFields,
  inputValidationMessage,
}) {
  const [inputClassHash, setInputClassHash] = useState({});
  const handleInputChange = (e, fieldName) => {
    setSignupFieldValue(fieldName, e.currentTarget.value);
  };

  // This component... do I need it?

  const getInputComponent = () => {
    switch (id) {
      case "login-username":
        return (
          <input
            type="text"
            name="user[login]"
            id="username"
            defaultValue="guest"
          />
        );
      case "login-password":
        return (
          <input
            type="password"
            name="user[password]"
            id="password"
            defaultValue="password123"
          />
        );
      case "signup-name":
        return (
          <input
            type="text"
            value={signupFields.name || ""}
            name="name"
            id={id}
            className={
              inputValidationMessage && inputValidationMessage.length > 0
                ? "input-error"
                : ""
            }
            onChange={(e) => {
              setSignupFieldValue("name", e.currentTarget.value);
            }}
          />
        );
      case "signup-email":
        return (
          <input
            type="email"
            value={signupFields.email || ""}
            name="email"
            id="email"
            onChange={(e) =>
              setSignupFieldValue("email", e.currentTarget.value)
            }
          />
        );
      case "birthday-month":
        return (
          <MonthPicker
            value={signupFields.birthMonth || ""}
            onChange={(birthMonth) => {
              setSignupFieldValue("birthMonth", birthMonth);
            }}
          />
        );
      case "birthday-day":
        return (
          <DayPicker
            value={signupFields.birthDay || ""}
            onChange={(birthDay) => {
              setSignupFieldValue("birthDay", birthDay);
            }}
          />
        );
      case "birthday-year":
        return (
          <YearPicker
            reverse
            value={signupFields.birthYear || ""}
            onChange={(birthYear) => {
              setSignupFieldValue("birthYear", birthYear);
            }}
          />
        );

      case "signup-handle":
        return (
          <input
            type="text"
            name="user[handle]"
            value={signupFields.handle || ""}
            id="signup-handle"
            onChange={(e) =>
              setSignupFieldValue("handle", e.currentTarget.value)
            }
          />
        );
      case "signup-username":
        return (
          <input
            type="text"
            name="user[username]"
            value={signupFields.username || ""}
            id="signup-username"
            onChange={(e) =>
              setSignupFieldValue("username", e.currentTarget.value)
            }
          />
        );
      case "signup-password":
        return (
          <input
            type="password"
            value={signupFields.password || ""}
            name="signup-password"
            id="signup-password"
            onChange={(e) =>
              setSignupFieldValue("password", e.currentTarget.value)
            }
          />
        );
      case "signup-password-confirmation":
        return (
          <input
            type="password"
            value={signupFields.password_confirmation || ""}
            name="signup-password-confirmation"
            id="signup-password-confirmation"
            onChange={(e) =>
              setSignupFieldValue(
                "password_confirmation",
                e.currentTarget.value
              )
            }
          />
        );
      default:
        null;
    }
  };
  return (
    <>
      <div
        id={id}
        onFocus={() => {
          setInputClassHash({
            ...inputClassHash,
            [inputName]: inputValidationMessage
              ? "focused input-error"
              : "focused",
          });
        }}
        onBlur={() => {
          setInputClassHash({
            ...inputClassHash,
            [inputName]: inputValidationMessage ? "input-error" : "",
          });
        }}
        className={`input-with-label ${inputClassHash[inputName]}`}>
        {getInputComponent()}
      </div>
      <div
        className={
          inputValidationMessage && inputValidationMessage.length > 0
            ? "input-error"
            : ""
        }
        style={
          inputValidationMessage && inputValidationMessage.length > 0
            ? {
                display: "block",
                marginTop: "-15px",
                marginLeft: "2px",
              }
            : { display: "none" }
        }>
        {inputValidationMessage}
      </div>
    </>
  );
}

FormInput.propTypes = {
  id: PropTypes.string,
  inputName: PropTypes.string,
  setSignupFieldValue: PropTypes.func,
  signupFields: PropTypes.object,
};

export default FormInput;
