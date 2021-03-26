import React from "react";
import PropTypes from "prop-types";

function SignupModal(props) {
  return (
    <div id="signup-modal">
      <div>
        <svg viewBox="0 0 24 24" id="login-bird-svg">
          <g>
            <path
              d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
              fill="white"></path>
          </g>
        </svg>
        <h1>Create your account</h1>
        <div className="flash-msg">{props.flash}</div>
      </div>
      <form id="signup-form">
        <input
          type="hidden"
          name="authenticity_token"
          value={props.authenticity_token}></input>
        <div id="signup-name">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onFocus={props.colorInputs}
            onBlur={props.colorInputs}></input>
        </div>
        <div id="signup-email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onFocus={props.colorInputs}
            onBlur={props.decolorInputs}></input>
        </div>
        <div id="login-submit">
          <input
            type="submit"
            name="commit"
            value="Log in"
            className="reply-color-background-hover"
            data-disable-with="Log in"></input>
        </div>
      </form>

      {/* <h1>Sign up</h1>

<%= form_for @user do |f| %>
    <%= f.label :name %>
    <%= f.text_field :name %><br>
    <%= f.label :email %>
    <%= f.text_field :email %><br>
    <%= f.label :username %>
    <%= f.text_field :username %><br>
    <%= f.label :handle %>
    <%= f.text_field :handle %><br>
    <%= f.label :password %>
    <%= f.password_field :password %><br>
    <%= f.label :birthday, 'Date of Birth' %>
    <div id='birthday-disclaimer'>
        This will not be shown publicly. Confirm your age to receive the appropriate experience.
    </div>
    <div id='date-select'>
        <%= f.date_select :birthday, order: [:month, :day, :year], start_year: Date.today.year, end_year: 1900, include_blank: true %>
    </div>
    <%= f.submit 'Sign up!' %>
<% end %>*/}
    </div>
  );
}

SignupModal.propTypes = {
  colorInputs: PropTypes.func,
  decolorInputs: PropTypes.func,
};

export default SignupModal;
