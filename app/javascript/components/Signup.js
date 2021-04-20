import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import FormInput from "./FormInput";

function Signup({ flash, authenticity_token }) {
  const csrf = document
    .querySelector("meta[name='csrf-token']")
    .getAttribute("content");

  const [formPart, setFormPart] = useState(1);
  // useState for name, email, bday{month, day, year}, password, confirm password
  const [signupFields, setSignupFields] = useState({});

  const setSignupFieldValue = (fieldName, fieldValue) => {
    // switch case with validation checks
    // ACTUALLY, just do validation checks in onChange in FormInput
    setSignupFields({ ...signupFields, [fieldName]: fieldValue });
  };

  const submitSignupForm = async () => {
    let msg = "";
    msg = await fetch("/users", {
      method: "POST",
      body: JSON.stringify({
        authenticity_token: authenticity_token,
        user: {
          name: signupFields.name,
          username: signupFields.username,
          handle: signupFields.handle,
          email: signupFields.email,
          password: signupFields.password,
          password_confirmation: signupFields.password_confirmation,
        },
        commit: "Sign up",
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRF-Token": csrf,
      },
    });
    let json = await msg.json();
    console.log(JSON.stringify(json));
  };

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
              <Button buttonText={"Next"} clickAction={() => setFormPart(2)} />
            ) : (
              <Button
                buttonText={"Sign up!"}
                type="submit"
                clickAction={submitSignupForm}
              />
            )}
          </div>
        </div>
        <div id="signup-form-container">
          <form id="signup-form" action="/users" method="post">
            {formPart === 1 ? (
              <React.Fragment>
                <div>{JSON.stringify(signupFields)}</div>
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
                />
                <FormInput
                  id={"signup-email"}
                  inputName={"email"}
                  setSignupFieldValue={setSignupFieldValue}
                  signupFields={signupFields}
                />
                <div className="signup-birthday-container">
                  <div className="signup-birthday-label">
                    <h4>Date of birth</h4>
                    <div>
                      This will not be shown publicly. Confirm your own age,
                      even if this account is for a business, a pet, or
                      something else.
                    </div>
                  </div>
                  <div className="birthday-input-container">
                    <FormInput
                      id={"birthday-month"}
                      inputName={"month"}
                      setSignupFieldValue={setSignupFieldValue}
                      signupFields={signupFields}
                    />
                    <FormInput
                      id={"birthday-day"}
                      inputName={"day"}
                      setSignupFieldValue={setSignupFieldValue}
                      signupFields={signupFields}
                    />
                    <FormInput
                      id={"birthday-year"}
                      inputName={"year"}
                      setSignupFieldValue={setSignupFieldValue}
                      signupFields={signupFields}
                    />
                  </div>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div>{JSON.stringify(signupFields)}</div>
                <h1>Choose a password</h1>
                {flash.alert && (
                  <div className="flash-alert">{flash.alert}</div>
                )}
                {flash.notice && (
                  <div className="flash-notice">{flash.notice}</div>
                )}
                <FormInput
                  id={"signup-username"}
                  inputName={"username"}
                  setSignupFieldValue={setSignupFieldValue}
                  signupFields={signupFields}
                />
                <FormInput
                  id={"signup-handle"}
                  inputName={"handle"}
                  setSignupFieldValue={setSignupFieldValue}
                  signupFields={signupFields}
                />

                <FormInput
                  id={"signup-password"}
                  inputName={"password"}
                  setSignupFieldValue={setSignupFieldValue}
                  signupFields={signupFields}
                />
                <FormInput
                  id={"signup-password-confirmation"}
                  inputName={"password-confirmation"}
                  setSignupFieldValue={setSignupFieldValue}
                  signupFields={signupFields}
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
};

export default Signup;
