import React, { useState } from "react";
import { YearPicker, MonthPicker, DayPicker } from "react-dropdown-date";
import PropTypes from "prop-types";

function FormInput({ id, inputName, setSignupFieldValue, signupFields }) {
  const [inputClassHash, setInputClassHash] = useState({});

  const handleInputChange = (e, fieldName) => {
    setSignupFieldValue(fieldName, e.currentTarget.value);
  };

  const getInputComponent = () => {
    switch (id) {
      case "login-username":
        return (
          <input
            type="text"
            name="user[login]"
            id="username"
            defaultValue="guest"></input>
        );
      case "login-password":
        return (
          <input
            type="password"
            name="user[password]"
            id="password"
            defaultValue="password123"></input>
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
            }></input>
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
            }></input>
        );
      case "signup-name":
        return (
          <input
            type="text"
            value={signupFields.name || ""}
            name="name"
            id="name"
            onChange={(e) =>
              setSignupFieldValue("name", e.currentTarget.value)
            }></input>
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
            }></input>
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
      default:
        null;
    }
  };
  return (
    <div
      id={id}
      onFocus={() => {
        setInputClassHash({
          ...inputClassHash,
          [inputName]: "focused",
        });
      }}
      onBlur={() => {
        setInputClassHash({ ...inputClassHash, [inputName]: "" });
      }}
      className={`input-with-label ${inputClassHash[inputName]}`}>
      {getInputComponent()}
    </div>
  );
}

FormInput.propTypes = {
  id: PropTypes.string,
  inputName: PropTypes.string,
  setSignupFieldValue: PropTypes.func,
  signupFields: PropTypes.object,
};

export default FormInput;
