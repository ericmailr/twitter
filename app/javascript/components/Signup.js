import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import FormInput from "./FormInput";

function Signup({ flash, authenticity_token, errors }) {
  const [formPart, setFormPart] = useState(1);

  const [signupFields, setSignupFields] = useState({
    name: null,
    email: null,
    birthMonth: null,
    birthDay: null,
    birthYear: null,
    username: null,
    handle: null,
    password: null,
    password_confirmation: null,
  });

  const [inputValidationMessages, setInputValidationMessages] = useState({
    name: "",
    email: "",
    birthMonth: "",
    birthDay: "",
    birthYear: "",
    username: "",
    handle: "",
    password: "",
    password_confirmation: "",
  });

  const [nextButtonClasses, setNextButtonClasses] = useState(
    "submit-button unsubmittable-button"
  );

  const [submitButtonClasses, setSubmitButtonClasses] = useState(
    "submit-button unsubmittable-button"
  );

  const setSignupFieldValue = (fieldName, fieldValue) => {
    setSignupFields({ ...signupFields, [fieldName]: fieldValue });
  };

  const isNextButtonReady = () => {
    return (
      inputValidationMessages.name === null &&
      inputValidationMessages.email === null &&
      inputValidationMessages.birthMonth === null &&
      inputValidationMessages.birthDay === null &&
      inputValidationMessages.birthYear === null
    );
  };

  const isSubmitButtonReady = () => {
    return (
      inputValidationMessages.username === null &&
      inputValidationMessages.handle === null &&
      inputValidationMessages.password === null &&
      inputValidationMessages.password_confirmation === null
    );
  };

  useEffect(() => {
    if (isNextButtonReady()) {
      setNextButtonClasses(
        "submit-button submittable-button reply-color-background-hover"
      );
    } else {
      setNextButtonClasses("submit-button unsubmittable-button");
    }

    if (isSubmitButtonReady()) {
      setSubmitButtonClasses(
        "submit-button submittable-button reply-color-background-hover"
      );
    } else {
      setSubmitButtonClasses("submit-button unsubmittable-button");
    }
  }, [inputValidationMessages]);

  useEffect(() => {
    if (signupFields.name !== null) {
      if (signupFields.name.length < 1) {
        setInputValidationMessages((prevInputValidationMessages) => {
          return {
            ...prevInputValidationMessages,
            name: "What's your name?",
          };
        });
      } else {
        setInputValidationMessages((prevInputValidationMessages) => {
          return {
            ...prevInputValidationMessages,
            name:
              errors.name && inputValidationMessages.name === ""
                ? errors.name
                : null,
          };
        });
      }
    }
  }, [signupFields.name]);

  useEffect(() => {
    if (signupFields.email !== null) {
      if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          signupFields.email
        )
      ) {
        setInputValidationMessages((prevInputValidationMessages) => {
          return {
            ...prevInputValidationMessages,
            email: "Email is invalid.",
          };
        });
      } else {
        setInputValidationMessages((prevInputValidationMessages) => {
          return {
            ...prevInputValidationMessages,
            email:
              errors.email && inputValidationMessages.email === ""
                ? errors.email
                : null,
          };
        });
      }
    }
  }, [signupFields.email]);

  useEffect(() => {
    if (signupFields.birthMonth !== null) {
      if (signupFields.birthMonth === "") {
        setInputValidationMessages((prevInputValidationMessages) => {
          return {
            ...prevInputValidationMessages,
            birthMonth: "Please select a birth month.",
          };
        });
      } else {
        setInputValidationMessages((prevInputValidationMessages) => {
          return {
            ...prevInputValidationMessages,
            birthMonth: null,
          };
        });
      }
    }
  }, [signupFields.birthMonth]);

  useEffect(() => {
    if (signupFields.birthDay !== null) {
      if (signupFields.birthDay === "") {
        setInputValidationMessages((prevInputValidationMessages) => {
          return {
            ...prevInputValidationMessages,
            birthDay: "Please select a birth day.",
          };
        });
      } else {
        setInputValidationMessages((prevInputValidationMessages) => {
          return {
            ...prevInputValidationMessages,
            birthDay: null,
          };
        });
      }
    }
  }, [signupFields.birthDay]);

  useEffect(() => {
    if (signupFields.birthYear !== null) {
      if (signupFields.birthYear === "") {
        setInputValidationMessages((prevInputValidationMessages) => {
          return {
            ...prevInputValidationMessages,
            birthYear: "Please select a birth year.",
          };
        });
      } else {
        setInputValidationMessages((prevInputValidationMessages) => {
          return {
            ...prevInputValidationMessages,
            birthYear: null,
          };
        });
      }
    }
  }, [signupFields.birthYear]);

  useEffect(() => {
    if (signupFields.username !== null) {
      if (signupFields.username.length < 2) {
        setInputValidationMessages((prevInputValidationMessages) => {
          return {
            ...prevInputValidationMessages,
            username: "Username must be at least 2 characters.",
          };
        });
      } else {
        setInputValidationMessages((prevInputValidationMessages) => {
          return {
            ...prevInputValidationMessages,
            username:
              errors.username && inputValidationMessages.username === ""
                ? errors.username
                : null,
          };
        });
      }
    }
  }, [signupFields.username]);

  useEffect(() => {
    if (signupFields.handle !== null) {
      if (signupFields.handle.length < 2) {
        setInputValidationMessages((prevInputValidationMessages) => {
          return {
            ...prevInputValidationMessages,
            handle: "Your handle must be at least 2 characters.",
          };
        });
      } else {
        setInputValidationMessages((prevInputValidationMessages) => {
          return {
            ...prevInputValidationMessages,
            handle:
              errors.handle && inputValidationMessages.handle === ""
                ? errors.handle
                : null,
          };
        });
      }
    }
  }, [signupFields.handle]);

  useEffect(() => {
    if (signupFields.password !== null) {
      if (signupFields.password.length < 6) {
        setInputValidationMessages((prevInputValidationMessages) => {
          return {
            ...prevInputValidationMessages,
            password: "Your password must be at least 6 characters.",
          };
        });
      } else {
        setInputValidationMessages((prevInputValidationMessages) => {
          return {
            ...prevInputValidationMessages,
            password:
              errors.password && inputValidationMessages.password === ""
                ? errors.password
                : null,
          };
        });
      }
    }
  }, [signupFields.password]);

  useEffect(() => {
    if (signupFields.password_confirmation !== null) {
      if (signupFields.password_confirmation !== signupFields.password) {
        setInputValidationMessages((prevInputValidationMessages) => {
          return {
            ...prevInputValidationMessages,
            password_confirmation: "Passwords don't match.",
          };
        });
      } else {
        setInputValidationMessages((prevInputValidationMessages) => {
          return {
            ...prevInputValidationMessages,
            password_confirmation:
              errors.password_confirmation &&
              inputValidationMessages.password_confirmation === ""
                ? errors.password_confirmation
                : null,
          };
        });
      }
    }
  }, [signupFields.password_confirmation, signupFields.password]);

  return (
    <div className="form-container">
      <div className="form">
        <div className="form-header">
          <div className="signup-form-header-subcontainer"></div>
          <svg viewBox="0 0 24 24" id="login-bird-svg">
            <g>
              <path
                d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
                fill="white"></path>
            </g>
          </svg>
          <div className="signup-form-header-subcontainer">
            {formPart === 1 ? (
              <Button
                buttonText={"Next"}
                buttonClasses={nextButtonClasses}
                clickAction={isNextButtonReady() ? () => setFormPart(2) : null}
              />
            ) : (
              <Button
                buttonText={"Sign up!"}
                type="submit"
                buttonClasses={submitButtonClasses}
              />
            )}
          </div>
        </div>
        <div id="signup-form-container">
          <form
            id="signup-form"
            action="/users"
            method="post"
            autoComplete="off">
            <input
              type="hidden"
              name="authenticity_token"
              value={authenticity_token}
            />
            {formPart === 1 ? (
              <React.Fragment>
                <h1>Create your account</h1>
                {flash.alert && (
                  <div className="flash-alert">{flash.alert}</div>
                )}
                {flash.notice && (
                  <div className="flash-notice">{flash.notice}</div>
                )}
                <FormInput
                  id={"signup-name"}
                  inputName={"name"}
                  setSignupFieldValue={setSignupFieldValue}
                  signupFields={signupFields}
                  inputValidationMessage={inputValidationMessages.name}
                />
                <FormInput
                  id={"signup-email"}
                  inputName={"email"}
                  setSignupFieldValue={setSignupFieldValue}
                  signupFields={signupFields}
                  inputValidationMessage={inputValidationMessages.email}
                />
                <div className="signup-birthday-container">
                  <div className="signup-birthday-label">
                    <h4>Date of birth</h4>
                    <div>
                      This will not be shown publicly. Confirm your own age,
                      even if this account is for a business, a pet, or
                      something else. Also, I'm not even saving it to my
                      database yet...
                    </div>
                  </div>
                  <div className="birthday-input-container">
                    <FormInput
                      id={"birthday-month"}
                      inputName={"month"}
                      setSignupFieldValue={setSignupFieldValue}
                      signupFields={signupFields}
                      inputValidationMessage={
                        inputValidationMessages.birthMonth
                      }
                    />
                    <FormInput
                      id={"birthday-day"}
                      inputName={"day"}
                      setSignupFieldValue={setSignupFieldValue}
                      signupFields={signupFields}
                      inputValidationMessage={inputValidationMessages.birthDay}
                    />
                    <FormInput
                      id={"birthday-year"}
                      inputName={"year"}
                      setSignupFieldValue={setSignupFieldValue}
                      signupFields={signupFields}
                      inputValidationMessage={inputValidationMessages.birthYear}
                    />
                  </div>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {flash.alert && (
                  <div className="flash-alert">{flash.alert}</div>
                )}
                {flash.notice && (
                  <div className="flash-notice">{flash.notice}</div>
                )}
                <input
                  type="hidden"
                  name="user[name]"
                  value={signupFields.name}
                />
                <input
                  type="hidden"
                  name="user[email]"
                  value={signupFields.email}
                />
                <h2>Choose a Username</h2>
                <FormInput
                  id={"signup-username"}
                  inputName={"username"}
                  setSignupFieldValue={setSignupFieldValue}
                  signupFields={signupFields}
                  inputValidationMessage={inputValidationMessages.username}
                />
                <h2>Choose a Handle</h2>
                <FormInput
                  id={"signup-handle"}
                  inputName={"handle"}
                  setSignupFieldValue={setSignupFieldValue}
                  signupFields={signupFields}
                  inputValidationMessage={inputValidationMessages.handle}
                />
                <h2>Choose a password</h2>
                <FormInput
                  id={"signup-password"}
                  inputName={"password"}
                  setSignupFieldValue={setSignupFieldValue}
                  signupFields={signupFields}
                  inputValidationMessage={inputValidationMessages.password}
                />
                <FormInput
                  id={"signup-password-confirmation"}
                  inputName={"password-confirmation"}
                  setSignupFieldValue={setSignupFieldValue}
                  signupFields={signupFields}
                  inputValidationMessage={
                    inputValidationMessages.password_confirmation
                  }
                />
              </React.Fragment>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

Signup.propTypes = {
  colorInputs: PropTypes.func,
  decolorInputs: PropTypes.func,
  flash: PropTypes.object,
  authenticity_token: PropTypes.string,
  errors: PropTypes.object,
};

export default Signup;
