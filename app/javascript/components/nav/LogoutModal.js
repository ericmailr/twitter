import React from "react";
import PropTypes from "prop-types";
import Avatar from "../users/Avatar";

function LogoutModal(props) {
  const signout = async () => {
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");
    let msg = await fetch("/users/sign_out", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRF-Token": csrf,
      },
    }).then(() => location.reload());
  };
  return (
    <div id="logout-modal">
      <div className="logout-user-card">
        <div className="avatar-container">
          <Avatar />
        </div>
        <div className="user-identifiers">
          <div>
            <div>
              <div className={"username"}>{props.username}</div>
              <div className={"font-secondary handle"}>
                {" @"}
                {props.handle}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="logout-container" onClick={signout}>
        Log out <span className={"handle"}>@{props.handle}</span>
      </div>
      <div className="logout-modal-triangle"></div>
    </div>
  );
}

LogoutModal.propTypes = {
  handle: PropTypes.string,
  username: PropTypes.string,
};

export default LogoutModal;
