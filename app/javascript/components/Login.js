import React from "react";
import PropTypes from "prop-types";
import FormInput from "./FormInput";

function Login({ authenticity_token, flash }) {
  return (
    <div id="login-container">
      <div id="login-top">
        <svg viewBox="0 0 24 24" id="login-bird-svg">
          <g>
            <path
              d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
              fill="white"></path>
          </g>
        </svg>
        <h1>Log in to Twitter</h1>
        {flash.alert && <div className="flash-alert">{flash.alert}</div>}
        {flash.notice && <div className="flash-notice">{flash.notice}</div>}
      </div>
      <form id="login-form" action="/users/sign_in" method="post">
        <input
          type="hidden"
          name="authenticity_token"
          value={authenticity_token}></input>
        <FormInput id={"login-username"} inputName={"user[login]"} />
        <FormInput id={"login-password"} inputName={"user[password]"} />
        <div id="login-submit">
          <input
            type="submit"
            name="commit"
            value="Log in"
            className="reply-color-background-hover"
            data-disable-with="Log in"></input>
        </div>
        <div id="login-options">
          <a href="/users/sign_up">
            <span> Sign up for Twitter</span>
          </a>
          <a href="/users/password/new">
            <span>Forgot my password</span>
          </a>
        </div>
      </form>
    </div>
  );
}
Login.propTypes = {
  authenticity_token: PropTypes.string,
  flash: PropTypes.object,
  toggleModal: PropTypes.func,
};

export default Login;
