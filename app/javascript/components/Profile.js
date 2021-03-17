import React from "react";
import PropTypes from "prop-types";
import ProfilePostList from "./ProfilePostList";
import TopHeader from "./TopHeader";

function Profile(props) {
  return (
    <React.Fragment>
      <TopHeader
        header={props.user.username}
        goBack={true}
        tweetCount={props.user.tweetCount}
      />
      <div className="profile-description">
        <div className="username-handle">
          <h2 className="username">{props.user.username}</h2>
          <p className="font-secondary handle">@{props.user.handle}</p>
        </div>
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
          <span className="font-secondary">
            {" "}
            Joined {props.user_created_at}{" "}
          </span>
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
      <ProfilePostList
        posts={props.posts}
        post_types={props.post_types}
        user={props.user}
      />
    </React.Fragment>
  );
}

Profile.propTypes = {
  posts: PropTypes.array,
  user: PropTypes.object,
  user_created_at: PropTypes.string,
  post_types: PropTypes.string,
};

export default Profile;