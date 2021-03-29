import React from "react";
import AvatarImg from "../../assets/avatar.png";

function Avatar() {
  return (
    <div>
      <img className="avatar" src={AvatarImg} alt="default avatar" />
    </div>
  );
}

export default Avatar;
