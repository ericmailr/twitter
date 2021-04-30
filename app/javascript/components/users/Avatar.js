import React from "react";
import PropTypes from "prop-types";
import AvatarImg from "../../assets/avatar.png";
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";

function Avatar({ avatar_public_id }) {
  const cloudName = "hr0v6dg24";
  console.log(avatar_public_id);
  return (
    <Image
      className="avatar"
      cloudName={cloudName}
      publicId={avatar_public_id ? avatar_public_id : "default_avatar.png"}>
      <Transformation width="48" height="48" gravity="face" crop="thumb" />
    </Image>
    /*
    <div>
      <img
        className="avatar"
        src={props.avatar_url ? props.avatar_url : AvatarImg}
        alt="default avatar"
      />
    </div>
    */
  );
}

Avatar.propTypes = {
  avatar_public_id: PropTypes.string,
};

export default Avatar;
