import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const ForgotPassword = ({ authenticity_token, errors }) => {
  console.log(errors);
  return (
    <div id="container">
      <div id="login-container">
        <div id="login-top">
          <svg viewBox="0 0 24 24" id="login-bird-svg">
            <g>
              <path
                d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
                fill="white"></path>
            </g>
          </svg>
          <h1>Reset your password</h1>
          {errors.length > 0 ? <div>{errors}</div> : null}
        </div>

        <form
          id="send-password-reset-form"
          method="post"
          action="/users/password">
          <input
            type="hidden"
            name="authenticity_token"
            value={authenticity_token}
          />
          <div className="input-field">
            <label htmlFor="user_email">Email</label>
            <input
              autoFocus="autofocus"
              autoComplete="email"
              type="email"
              name="user[email]"
              id="user_email"
            />
          </div>
          <div>
            <Button
              buttonText="Send me reset password instructions"
              buttonClasses="submittable-button submit-button"
              clickAction={null}
              formId="send-password-reset-form"
            />
          </div>
          <div className="session-links">
            <a href="/users/sign_in/">Sign in</a>
            <a href="/users/sign_up">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

ForgotPassword.propTypes = {
  authenticity_token: PropTypes.string,
};

export default ForgotPassword;