import React from "react";
import PropTypes from "prop-types";
import Avatar from "../../assets/avatar.png";
import TweetOptions from "../tweets/TweetOptions";

function Status(props) {
  return (
    <div className="status">
      <div className="status-header">
        <div className="avatar-container">
          <img className="avatar" src={Avatar} alt="default avatar" />
        </div>
        <div>
          <a href={Routes.profile_path(props.tweet.tweeter.handle)}>
            <div className={"username"}>{props.tweet.tweeter.username}</div>
            <div className={"font-secondary handle"}>
              {" @"}
              {props.tweet.tweeter.handle}
            </div>
          </a>
        </div>
      </div>
      <a
        className="status-content"
        href={Routes.status_path(props.tweet.tweeter.handle, props.tweet.id)}>
        {props.tweet.content}
      </a>

      <div className="status-updated-at font-secondary">{props.updatedAt} </div>

      {/* only show if there are any, and if there are, only show the ones with count > 0 */}
      <div className="status-stats">
        {props.tweet.retweets.length > 0 && (
          <a href="#">
            <span style={{ fontWeight: "700" }}>
              {props.tweet.retweets.length}{" "}
            </span>
            <span className="font-secondary">Retweets</span>
          </a>
        )}

        {/*NEED TO ADD QUOTE TWEETS HERE*/}

        {props.tweet.likes.length > 0 && (
          <a href="#">
            <span style={{ fontWeight: "700" }}>
              {props.tweet.likes.length}{" "}
            </span>
            <span className="font-secondary">Likes</span>
          </a>
        )}
      </div>
      <TweetOptions
        tweetId={props.tweet.id}
        commentCount={props.tweet.children.length}
        retweetCount={props.tweet.retweets.length}
        isLiked={props.isLiked}
        omitCount={true}
      />
    </div>
  );
}

Status.propTypes = {
  tweet: PropTypes.object,
  updatedAt: PropTypes.string,
  isLiked: PropTypes.bool,
};

export default Status;
