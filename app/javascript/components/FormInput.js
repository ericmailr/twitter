import React, { useState } from "react";
import { YearPicker, MonthPicker, DayPicker } from "react-dropdown-date";
import PropTypes from "prop-types";

function FormInput({ id, inputName }) {
  const [inputClassHash, setInputClassHash] = useState({});
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
        break;
      case "login-password":
        return (
          <input
            type="password"
            name="user[password]"
            id="password"
            defaultValue="password123"></input>
        );
        break;
      case "signup-password":
        return (
          <input
            type="password"
            name="signup-password"
            id="signup-password"></input>
        );
        break;
      case "signup-password-confirmation":
        return (
          <input
            type="password"
            name="signup-password-confirmation"
            id="signup-password-confirmation"></input>
        );
        break;
      case "signup-name":
        return <input type="text" name="name" id="name"></input>;
        break;
      case "signup-email":
        return <input type="email" name="email" id="email"></input>;
        break;
      case "birthday-month":
        return <MonthPicker onChange={(month) => {}} />;
        break;
      case "birthday-day":
        return <DayPicker onChange={(day) => {}} />;
        break;
      case "birthday-year":
        return <YearPicker reverse onChange={(year) => {}} />;
        break;
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
};

export default FormInput;
