import React from "react";
import PropTypes from "prop-types";
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";

function ProfileCard(props) {
  const cloudName = "hr0v6dg24";
  const csrf = document
    .querySelector("meta[name='csrf-token']")
    .getAttribute("content");
  const generateSignature = async () => {
    console.log("params_to_sign: ", params_to_sign);
    console.log("callback: ", callback);
    let response = await fetch(
      `/${props.user.handle}?params_to_sign=${params_to_sign}`
    );
    let signature = await response.json();
    console.log(signature.uploadSignature);
    return signature.uploadSignature;
  };

  const updateUserAvatarUrl = async (error, result) => {
    if (result.event === "success") {
      //console.log("error: ", error);
      //console.log("result: ", result);

      console.log("result.info.public_id", result.info.public_id);
      await fetch(`/users/${props.user.id}`, {
        method: "PUT",
        body: JSON.stringify({
          avatar_public_id: result.info.public_id,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRF-Token": csrf,
        },
      });
    }
  };

  const uploadImage = () => {
    cloudinary.setCloudName("hr0v6dg24");
    var widget = cloudinary.createUploadWidget(
      {
        uploadPreset: "sugrxluo",
        //uploadSignature: generateSignature,
      },
      updateUserAvatarUrl
    );
    widget.open();
  };
  return (
    <div className="profile-description">
      <div className="username-handle">
        <h2 className="username">{props.user.username}</h2>
        <p className="font-secondary handle">@{props.user.handle}</p>
      </div>
      {props.currentUser.handle === props.user.handle && (
        <div
          id="widget-thing"
          onClick={uploadImage}
          style={{ cursor: "pointer" }}>
          Pick an avatar image
        </div>
      )}
      <div>
        <svg viewBox="0 0 24 24" className="misc-svg font-secondary">
          <g>
            <path
              d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"
              fill="currentcolor"></path>
            <circle cx="7.032" cy="8.75" r="1.285"></circle>
            <circle cx="7.032" cy="13.156" r="1.285"></circle>
            <circle cx="16.968" cy="8.75" r="1.285"></circle>
            <circle cx="16.968" cy="13.156" r="1.285"></circle>
            <circle cx="12" cy="8.75" r="1.285"></circle>
            <circle cx="12" cy="13.156" r="1.285"></circle>
            <circle cx="7.032" cy="17.486" r="1.285"></circle>
            <circle cx="12" cy="17.486" r="1.285"></circle>
          </g>
        </svg>
        <span className="font-secondary"> Joined {props.userCreatedAt} </span>
      </div>
      <div className="follows font-secondary">
        <a href={Routes.following_path(props.user.handle)}>
          <span className="follow-number">
            {props.user.followed_users.length}
          </span>{" "}
          Following
        </a>
        <a href={Routes.followers_path(props.user.handle)}>
          <span className="follow-number">{props.user.followers.length}</span>{" "}
          Followers
        </a>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  user: PropTypes.object,
  userCreatedAt: PropTypes.string,
};

export default ProfileCard;
