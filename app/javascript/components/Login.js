import React from "react";

function Login() {
  const usernameDiv = document.getElementById("login-username");
  const passwordDiv = document.getElementById("login-password");
  const colorInputs = (e) => {
    e.currentTarget.parentElement.classList.add("focused");
    e.currentTarget.parentElement.style.border =
      "2px solid RGB(var(--reply-color))";
  };
  const decolorInputs = (e) => {
    e.currentTarget.parentElement.classList.remove("focused");
    e.currentTarget.parentElement.style.border =
      "2px solid rgba(136, 153, 166, 0.25)";
  };
  const addInputFocusListeners = (() => {
    usernameDiv.lastElementChild.addEventListener("focus", colorInputs);
    usernameDiv.lastElementChild.addEventListener("blur", decolorInputs);
    passwordDiv.lastElementChild.addEventListener("focus", colorInputs);
    passwordDiv.lastElementChild.addEventListener("blur", decolorInputs);
  })();
  return <React.Fragment></React.Fragment>;
}

export default Login;
