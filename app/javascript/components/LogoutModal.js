import React from "react";
import PropTypes from "prop-types";
import Avatar from "./Avatar";

function LogoutModal(props) {
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
      <a
        data-method="delete"
        href={Routes.logout_path()}
        className="logout-container">
        Log out <span className={"handle"}>@{props.handle}</span>
      </a>
      <div className="logout-modal-triangle"></div>
    </div>
  );
}

LogoutModal.propTypes = {
  handle: PropTypes.string,
  username: PropTypes.string,
};

export default LogoutModal;
