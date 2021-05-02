import React from "react";
import PropTypes from "prop-types";
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";

function Avatar({ avatar_public_id }) {
  const cloudName = "hr0v6dg24";
  return (
    <Image
      className="avatar"
      cloudName={cloudName}
      publicId={avatar_public_id ? avatar_public_id : "default_avatar.png"}>
      <Transformation gravity="face" crop="thumb" />
    </Image>
  );
}

Avatar.propTypes = {
  avatar_public_id: PropTypes.string,
};

export default Avatar;
